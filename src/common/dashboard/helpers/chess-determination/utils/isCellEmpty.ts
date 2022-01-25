import { splitColorAndNamePiece } from "./splitColorAndNamePiece";
import { IIsCellEmpty } from "./types";

export const isCellEmpty = ({ chessPosition, cell }: IIsCellEmpty) => {
  const [nextPieceColor] = splitColorAndNamePiece({ chessPosition, cell });

  return !nextPieceColor;
};
