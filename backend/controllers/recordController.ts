import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export const getRecords = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;

  const limit = Number(req.query.limit) || 20;

  const skip = (page - 1) * limit;

  const total = await prisma.record.count();

  const records = await prisma.record.findMany({
    skip,
    take: limit,
  });

  res.json({
    page,
    total,
    data: records,
  });
};

export const searchRecords = async (req: Request, res: Response) => {
  const searchWords = String(req.query.q || "");

  const records = await prisma.record.findMany({
    where: {
      OR: [
        {
          name: {
            contains: searchWords,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: searchWords,
            mode: "insensitive",
          },
        },
        {
          body: {
            contains: searchWords,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  res.json(records);
};

export const getConflicts = async ( req: Request, res: Response) => {

  const conflicts =
    await prisma.conflict.findMany({
      where: {
        resolved: false
      }
    });

  res.json(conflicts);
};