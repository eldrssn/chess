import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

export const isCellHasSameColor = (chessPosition: Record<string, string>, cell: string, pieceColor: string) => {
  const [nextPieceColor] = splitColorAndNamePiece(chessPosition, cell);

  if (!nextPieceColor) {
    return false;
  }

  return nextPieceColor === pieceColor
};