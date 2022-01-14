import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

export const addValidMoves = ({
  chessPosition,
  nextCellPosition,
  directions,
  direction,
  pieceColor,
  pieceMoves,
}) => {
  const [nextPieceColor] = splitColorAndNamePiece(
    chessPosition,
    nextCellPosition
  );

  if (nextPieceColor === pieceColor) {
    directions[direction] = false;
  }

  if (nextPieceColor && nextPieceColor !== pieceColor) {
    pieceMoves.push(nextCellPosition);
    directions[direction] = false;
  }

  if (directions[direction]) {
    pieceMoves.push(nextCellPosition);
  }
};
