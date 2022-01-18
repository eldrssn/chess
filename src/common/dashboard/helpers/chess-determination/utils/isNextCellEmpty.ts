import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

export const isNextCellEmpty = (chessPosition: Record<string, string>, nextCell: string) => {
  const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);

  return !nextPieceColor;
};