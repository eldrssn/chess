import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

export const filterPossibleMoves = ({
  allPossibleMoves,
  chessPosition,
  pieceColor,
}) => {
  return allPossibleMoves.filter((cellPosition: string) => {
    const [nextPieceColor] = splitColorAndNamePiece(
      chessPosition,
      cellPosition
    );
    return nextPieceColor !== pieceColor;
  });
};
