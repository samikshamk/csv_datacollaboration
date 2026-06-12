import { Record } from "@prisma/client";

export const detectConflicts = (
  existing: Record,
  incoming: any
) => {

  const conflicts = [];

  const fields = [
    "postId",
    "name",
    "email",
    "body"
  ];

  for (const field of fields) {

    const oldValue =
      String(existing[field as keyof Record]);

    const newValue =
      String(incoming[field]);

    if (oldValue !== newValue) {

      conflicts.push({
        fieldName: field,
        oldValue,
        newValue
      });
    }
  }

  return conflicts;
};