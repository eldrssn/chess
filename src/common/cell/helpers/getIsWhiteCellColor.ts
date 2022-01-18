import { COLUMN_CHARS } from "utils/constants";

export const getIsWhiteCellColor = (cellCoordinate: string) => {
  const cellChar = cellCoordinate[0];
  const cellNumber = cellCoordinate[1];

  const isEvenRow = +cellNumber % 2 === 0;

  if (isEvenRow) {
    return COLUMN_CHARS.indexOf(cellChar) % 2 === 0;
  }

  return COLUMN_CHARS.indexOf(cellChar) % 2 !== 0;
};
