import { KING_OFFSET_POSITIONS } from "./constants";
import { getCellsPositions } from "./getCellsPositions";
import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

export const getKingMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const kingAllPossibleMoves = getCellsPositions(
    currentPosition,
    KING_OFFSET_POSITIONS
  );

  const kingMoves = kingAllPossibleMoves.filter((cell) => {
    const [nextPieceColor] = splitColorAndNamePiece(chessPosition, cell);
    return nextPieceColor !== pieceColor;
  });

  return kingMoves;
};
