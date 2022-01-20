import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

// !TODO: избавиться от сайд-эффектов (если они тут есть)
export const isNextCellHasOppositeColor = (chessPosition: Record<string, string>, nextCell: string, pieceColor: string) => {
  const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);

  if (!nextPieceColor) {
    return false;
  }

  return nextPieceColor !== pieceColor
};