export const removeTrailingSpaces = (value) => {
  return value.trim();
};

export const removeNewLinesAndTrailingSpaces = (value) => {
  return value.replace(/\n/g, "").trim();
};
