import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";

export const getBishopNextCellPosition = (
  columnIndex: number,
  rowIndex: number
) => `${COLUMN_CHARS[columnIndex] + ROW_NUMBERS[rowIndex]}`;
