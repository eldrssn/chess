import { CHESSBOARD_SIZE, COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { BISHOP_DIRECTIONS } from "./utils/constants";
import { getCellPosition } from "./utils/getCellPosition";
import { isCellHasOppositeColor } from "./utils/isCellHasOppositeColor";
import { isCellHasSameColor } from "./utils/isCellHasSameColor";

export const getBishopMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const bishopMoves = [];
  const [currentColumn, currentRow] = currentPosition;
  const currentRowIndex = ROW_NUMBERS.indexOf(currentRow);
  const currentColumnIndex = COLUMN_CHARS.indexOf(currentColumn);

  const bishopNextCellPosition = {
    upRight: (i: number) => getCellPosition(COLUMN_CHARS[currentColumnIndex + i], ROW_NUMBERS[currentRowIndex + i]),
    upLeft: (i: number) => getCellPosition(COLUMN_CHARS[currentColumnIndex - i], ROW_NUMBERS[currentRowIndex + i]),
    downRight: (i: number) =>
      getCellPosition(COLUMN_CHARS[currentColumnIndex + i], ROW_NUMBERS[currentRowIndex - i]),
    downLeft: (i: number) =>
      getCellPosition(COLUMN_CHARS[currentColumnIndex - i], ROW_NUMBERS[currentRowIndex - i]),
  }

  const getBishopNextCellPosition = (direction: string, i: number) => {
    return bishopNextCellPosition[direction](i);
  }

  const moveByDirection = (direction: string) => {
    for (let i = 1; i < CHESSBOARD_SIZE; i++) {
      const nextPosition =  getBishopNextCellPosition(direction, i);

      if (isCellHasOppositeColor(
          chessPosition,
          nextPosition,
          pieceColor
        )) {
          bishopMoves.push(nextPosition);
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
        bishopMoves.push(nextPosition);
      }
    }
  };

  BISHOP_DIRECTIONS.map((direction) => moveByDirection(direction));

  return bishopMoves;
};
