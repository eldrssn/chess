import { CHESSBOARD_SIZE, COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { IGetRookNextCellPosition } from "./types";
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
    up: (i: number) =>
      getCellPosition({
        char: currentColumn,
        number: ROW_NUMBERS[currentRowIndex + i],
      }),
    down: (i: number) =>
      getCellPosition({
        char: currentColumn,
        number: ROW_NUMBERS[currentRowIndex - i],
      }),
    left: (i: number) =>
      getCellPosition({
        char: COLUMN_CHARS[currentColumnIndex - i],
        number: currentRow,
      }),
    right: (i: number) =>
      getCellPosition({
        char: COLUMN_CHARS[currentColumnIndex + i],
        number: currentRow,
      }),
  };

  const getRookNextCellPosition = ({
    direction,
    i,
  }: IGetRookNextCellPosition) => {
    return rookNextCellPosition[direction](i);
  };

  const moveByDirection = (direction: string) => {
    for (let i = 1; i < CHESSBOARD_SIZE; i++) {
      const nextCellPosition = getRookNextCellPosition({ direction, i });

      if (
        isCellHasOppositeColor({
          chessPosition,
          cell: nextCellPosition,
          pieceColor,
        })
      ) {
        rookMoves.push(nextCellPosition);
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
        rookMoves.push(nextCellPosition);
      }
    }
  };

  ROOK_DIRECTIONS.map((direction) => moveByDirection(direction));

  return rookMoves;
};
