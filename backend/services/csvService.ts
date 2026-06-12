import fs from "fs";
import csv from "csv-parser";

export const parseCsv = (filePath: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const rows: any[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        rows.push({
          id: Number(row.id),
          postId: Number(row.postId),
          name: row.name,
          email: row.email,
          body: row.body,
        });
      })
      .on("end", () => {
        resolve(rows);
      })
      .on("error", reject);
  });
};
