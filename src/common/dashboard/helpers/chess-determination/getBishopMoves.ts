import { CHESSBOARD_SIZE, COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { IGetBishopNextCellPosition } from "./types";
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
    upRight: (i: number) =>
      getCellPosition({
        char: COLUMN_CHARS[currentColumnIndex + i],
        number: ROW_NUMBERS[currentRowIndex + i],
      }),
    upLeft: (i: number) =>
      getCellPosition({
        char: COLUMN_CHARS[currentColumnIndex - i],
        number: ROW_NUMBERS[currentRowIndex + i],
      }),
    downRight: (i: number) =>
      getCellPosition({
        char: COLUMN_CHARS[currentColumnIndex + i],
        number: ROW_NUMBERS[currentRowIndex - i],
      }),
    downLeft: (i: number) =>
      getCellPosition({
        char: COLUMN_CHARS[currentColumnIndex - i],
        number: ROW_NUMBERS[currentRowIndex - i],
      }),
  };

  const getBishopNextCellPosition = ({
    direction,
    i,
  }: IGetBishopNextCellPosition) => {
    return bishopNextCellPosition[direction](i);
  };

  const moveByDirection = (direction: string) => {
    for (let i = 1; i < CHESSBOARD_SIZE; i++) {
      const nextCellPosition = getBishopNextCellPosition({ direction, i });

      if (
        isCellHasOppositeColor({
          chessPosition,
          cell: nextCellPosition,
          pieceColor,
        })
      ) {
        bishopMoves.push(nextCellPosition);
        return;
      }
      if (
        isCellHasSameColor({
          chessPosition,
          cell: nextCellPosition,
          pieceColor,
        })
      ) {
        return;
      }

      if (nextCellPosition) {
        bishopMoves.push(nextCellPosition);
      }
    }
  };

  BISHOP_DIRECTIONS.map((direction) => moveByDirection(direction));

  return bishopMoves;
};
