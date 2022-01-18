import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

export const isNextCellHasSameColor = (chessPosition: Record<string, string>, nextCell: string, pieceColor: string) => {
  const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);

  if (!nextPieceColor) {
    return false;
  }

  return nextPieceColor === pieceColor
};