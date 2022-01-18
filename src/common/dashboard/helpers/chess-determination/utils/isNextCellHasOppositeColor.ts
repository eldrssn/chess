import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

export const isNextCellHasOppositeColor = (chessPosition: Record<string, string>, nextCell: string, pieceColor: string) => {
  const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);

  if (!nextPieceColor) {
    return false;
  }

  return nextPieceColor !== pieceColor
};