import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

// !TODO: избавиться от сайд-эффектов (если они тут есть)
export const isCellEmpty = (chessPosition: Record<string, string>, cell: string) => {
  const [nextPieceColor] = splitColorAndNamePiece(chessPosition, cell);

  return !nextPieceColor;
};