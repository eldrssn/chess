import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";

export const getCellPositionFromIndex = (
  columnIndex: number,
  rowIndex: number
) => `${COLUMN_CHARS[columnIndex]}${ROW_NUMBERS[rowIndex]}`;

export const getCellPosition = (char: string, number: string) =>
  `${char}${number}`;

export const addRookMove = ({ index, direction, currentPosition }) => {
  const [currentColumn, currentRow] = currentPosition;

  const rookNextCellPosition = {
    up: (i: number) => getCellPosition(currentColumn, ROW_NUMBERS[i]),
    down: (i: number) => getCellPosition(currentColumn, ROW_NUMBERS[-i]),
    left: (i: number) => getCellPosition(COLUMN_CHARS[-i], currentRow),
    right: (i: number) => getCellPosition(COLUMN_CHARS[i], currentRow),

    // bishopDirections:
    upAndRight: (i: number) => getCellPosition(COLUMN_CHARS[i], ROW_NUMBERS[i]),
    upAndLeft: (i: number) => getCellPosition(COLUMN_CHARS[-i], ROW_NUMBERS[i]),
    downAndRight: (i: number) =>
      getCellPosition(COLUMN_CHARS[i], ROW_NUMBERS[-i]),
    downAndLeft: (i: number) =>
      getCellPosition(COLUMN_CHARS[-i], ROW_NUMBERS[-i]),
  };

  const getRookNextCellPosition = (direction: string, i: number) => {
    return rookNextCellPosition[direction](i);
  };

  const nextCellPosition = getRookNextCellPosition(direction, index);

  return nextCellPosition;
};
