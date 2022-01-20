import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

// !TODO: избавиться от сайд-эффектов (если они тут есть)
export const isNextCellEmpty = (chessPosition: Record<string, string>, nextCell: string) => {
  const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);

  return !nextPieceColor;
};