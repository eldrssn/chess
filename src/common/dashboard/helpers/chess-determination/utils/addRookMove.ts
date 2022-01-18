import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";

export const addRookMove = ({
  index,
  direction,
  currentPosition,
}) => {
  const [currentColumn, currentRow] = currentPosition;

  const rookNextCellPosition = {
    up: (i: number) => `${currentColumn + ROW_NUMBERS[i]}`,
    down: (i: number) => `${COLUMN_CHARS[i] + currentRow}`,
    left: (i: number) => `${COLUMN_CHARS[i] + currentRow}`,
    right: (i: number) => `${currentColumn + ROW_NUMBERS[i]}`,
  };

  const getRookNextCellPosition = (direction: string, i: number) => {
    return rookNextCellPosition[direction](i);
  };

  const nextCellPosition = getRookNextCellPosition(direction, index);

  return nextCellPosition;
};

