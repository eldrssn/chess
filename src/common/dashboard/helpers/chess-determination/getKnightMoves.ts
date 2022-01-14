import { KNIGHT_OFFSET_POSITIONS } from "./utils/constants";
import { filterPossibleMoves } from "./utils/filterPossibleMoves";
import { getAllCellsPositionsByOffset } from "./utils/getAllCellsPositionsByOffset";

export const getKnightMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const knightAllPossibleMoves = getAllCellsPositionsByOffset(
    currentPosition,
    KNIGHT_OFFSET_POSITIONS
  );

  const knightMoves = filterPossibleMoves({
    allPossibleMoves: knightAllPossibleMoves,
    chessPosition,
    pieceColor,
  });

  return knightMoves;
};
