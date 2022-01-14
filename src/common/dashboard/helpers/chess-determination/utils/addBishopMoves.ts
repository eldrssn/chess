import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { addValidMoves } from "./addValidMoves";

export const addBishopMoves = ({
  columnIndex,
  rowIndex,
  chessPosition,
  directions,
  direction,
  pieceColor,
  pieceMoves,
}) => {
  const getBishopNextCellPosition = (columnIndex: number, rowIndex: number) =>
    `${COLUMN_CHARS[columnIndex] + ROW_NUMBERS[rowIndex]}`;

  const nextCellPosition = getBishopNextCellPosition(columnIndex, rowIndex);

  addValidMoves({
    chessPosition,
    nextCellPosition,
    directions,
    direction,
    pieceColor,
    pieceMoves,
  });
};
