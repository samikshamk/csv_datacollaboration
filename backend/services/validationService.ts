import validator from "validator";

export const validateRow = (
  row: any
) => {

  const errors: string[] = [];

  if (!row.id)
    errors.push("id missing");

  if (!row.postId)
    errors.push("postId missing");

  if (!row.name)
    errors.push("name missing");

  if (!row.body)
    errors.push("body missing");

  if (!row.email)
    errors.push("email missing");

  if (
    row.email &&
    !validator.isEmail(row.email)
  ) {
    errors.push("invalid email");
  }

  return errors;
};