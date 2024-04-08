import { removeNewLinesAndTrailingSpaces } from "@/lib/utils";

export const validateStringLength = (value, limit, limitType) => {
  let isValid = true;

  if (limitType === "min") {
    if (value.length && removeNewLinesAndTrailingSpaces(value).length < limit) {
      isValid = false;
    }
  } else if (limitType === "max") {
    if (value.length && removeNewLinesAndTrailingSpaces(value).length > limit) {
      isValid = false;
    }
  }

  return isValid;
};
