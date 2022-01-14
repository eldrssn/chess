import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { addValidMoves } from "./addValidMoves";

export const addRookMoves = ({
  index,
  chessPosition,
  directions,
  direction,
  pieceColor,
  pieceMoves,
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
  addValidMoves({
    chessPosition,
    nextCellPosition,
    directions,
    direction,
    pieceColor,
    pieceMoves,
  });
};

// [DIRECTIONS.UP]: (i: number) => `${currentColumn + ROW_NUMBERS[i]}`,
//     [DIRECTIONS.DOWN]: (i: number) => `${COLUMN_CHARS[i] + currentRow}`,
//     [DIRECTIONS.LEFT]: (i: number) => `${COLUMN_CHARS[i] + currentRow}`,
//     [DIRECTIONS.RIGHT]: (i: number) => `${currentColumn + ROW_NUMBERS[i]}`,
