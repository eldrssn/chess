import { COLUMN_CHARS } from "utils/constants";

export const getIsWhite = (cell: string) => {
  const char = cell[0];
  const number = cell[1];

  const isEvenRow = +number % 2 === 0;

  if (isEvenRow) {
    return COLUMN_CHARS.indexOf(char) % 2 === 0;
  }

  return COLUMN_CHARS.indexOf(char) % 2 !== 0;
};
