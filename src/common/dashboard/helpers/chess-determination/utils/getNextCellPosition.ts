import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";

export const getNextCellPosition = ({
  currentPosition,
  columnOffset = 0,
  rowOffset = 0,
}) => {
  const [currentColumn, currentRow] = currentPosition;
  const currentRowIndex = ROW_NUMBERS.indexOf(currentRow);
  const currentColumnIndex = COLUMN_CHARS.indexOf(currentColumn);

  return `${
    COLUMN_CHARS[currentColumnIndex + columnOffset] +
    ROW_NUMBERS[currentRowIndex + rowOffset]
  }`;
};
