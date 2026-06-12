import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

import { parseCsv } from "../services/csvService";
import { validateRow } from "../services/validationService";
import { detectConflicts } from "../services/conflictService";

export const uploadCsv = async (
  req: Request,
  res: Response
) => {

  // Check if file is present
  if (!req.file) {
    return res
      .status(400)
      .json({
        message: "file missing"
      });
  }

 // Parse CSV file
  const rows = await parseCsv(req.file.path);

  let inserted = 0;
  let updated = 0;
  let rejected = 0;

  const conflicts: any[] = [];

  // Process each row from the CSV
  for (const row of rows) {
    const errors = validateRow(row);

    if (errors.length > 0) {
      rejected++;
      continue;
    }

    // Check if record with same ID already exists
    const existing = await prisma.record.findUnique({
        where: {
          id: row.id
        }
      });

    // If no existing record, create new one
    if (!existing) {
      await prisma.record.create({ data: row });
      inserted++;
      continue;
    }

    // If record exists, check for conflicts
    const detected = detectConflicts( existing, row );

    if (detected.length > 0) {
      updated++;
      for (const conflict of detected) {

        await prisma.conflict.create({
          data: {
            recordId: row.id,
            fieldName:
              conflict.fieldName,
            oldValue:
              conflict.oldValue,
            newValue:
              conflict.newValue
          }
        });

        conflicts.push({
          recordId: row.id,
          ...conflict
        });
      }

      await prisma.record.update({
        where: {
          id: row.id
        },
        data: {
          postId: row.postId,
          name: row.name,
          email: row.email,
          body: row.body
        }
      });
    }
  }

  res.json({
    totalRows: rows.length,
    inserted,
    updated,
    rejected,
    conflicts
  });

};