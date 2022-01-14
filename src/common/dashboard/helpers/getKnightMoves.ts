import { KNIGHT_OFFSET_POSITIONS } from "./constants";
import { getCellsPositions } from "./getCellsPositions";
import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

export const getKnightMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const knightAllPossibleMoves = getCellsPositions(
    currentPosition,
    KNIGHT_OFFSET_POSITIONS
  );

  const knightMoves = knightAllPossibleMoves.filter((cell) => {
    const [nextPieceColor] = splitColorAndNamePiece(chessPosition, cell);
    return nextPieceColor !== pieceColor;
  });

  return knightMoves;
};
