import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { getCellPosition } from "./getCellPosition";

export const getNextCellPosition = ({
  currentPosition,
  columnOffset = 0,
  rowOffset = 0,
}) => {
  const [currentColumn, currentRow] = currentPosition;
  const currentRowIndex = ROW_NUMBERS.indexOf(currentRow);
  const currentColumnIndex = COLUMN_CHARS.indexOf(currentColumn);

  return getCellPosition({
    char: COLUMN_CHARS[currentColumnIndex + columnOffset],
    number: ROW_NUMBERS[currentRowIndex + rowOffset],
  });
};
