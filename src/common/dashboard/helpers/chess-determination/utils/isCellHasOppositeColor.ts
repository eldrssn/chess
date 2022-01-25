import { splitColorAndNamePiece } from "./splitColorAndNamePiece";
import { IIsCellHasColor } from "./types";

export const isCellHasOppositeColor = ({
  chessPosition,
  cell,
  pieceColor,
}: IIsCellHasColor) => {
  const [nextPieceColor] = splitColorAndNamePiece({ chessPosition, cell });

  if (!nextPieceColor) {
    return false;
  }

  return nextPieceColor !== pieceColor;
};
