import { CHESSBOARD_SIZE, COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { ROOK_DIRECTIONS } from "./utils/constants";
import { getCellPosition } from "./utils/getCellPosition";
import { isCellHasOppositeColor } from "./utils/isCellHasOppositeColor";
import { isCellHasSameColor } from "./utils/isCellHasSameColor";

export const getRookMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const rookMoves = [];
  const [currentColumn, currentRow] = currentPosition;
  const currentRowIndex = ROW_NUMBERS.indexOf(currentRow);
  const currentColumnIndex = COLUMN_CHARS.indexOf(currentColumn);

  const rookNextCellPosition = {
    up: (i: number) => getCellPosition(currentColumn, ROW_NUMBERS[currentRowIndex + i]),
    down: (i: number) => getCellPosition(currentColumn, ROW_NUMBERS[currentRowIndex - i]),
    left: (i: number) => getCellPosition(COLUMN_CHARS[currentColumnIndex - i], currentRow),
    right: (i: number) => getCellPosition(COLUMN_CHARS[currentColumnIndex + i], currentRow),
  };

  const getRookNextCellPosition = (direction: string, i: number) => {
    return rookNextCellPosition[direction](i);
  };

  const moveByDirection = (direction: string) => {
    for (let i = 1; i < CHESSBOARD_SIZE; i++) {
      const nextPosition =  getRookNextCellPosition(direction, i);

      if (isCellHasOppositeColor(
          chessPosition,
          nextPosition,
          pieceColor
        )) {
          rookMoves.push(nextPosition);
          return;
      }

      if (isCellHasSameColor(
          chessPosition,
          nextPosition,
          pieceColor
        )) {
        return;
      }

      if (nextPosition) {
        rookMoves.push(nextPosition);
      }
    }
  };

  ROOK_DIRECTIONS.map((direction) => moveByDirection(direction))

  return rookMoves;
};
