import { KING_OFFSET_POSITIONS } from "./utils/constants";
import { filterPossibleMoves } from "./utils/filterPossibleMoves";
import { getAllCellsPositionsByOffset } from "./utils/getAllCellsPositionsByOffset";

export const getKingMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const kingAllPossibleMoves = getAllCellsPositionsByOffset(
    currentPosition,
    KING_OFFSET_POSITIONS
  );

  const kingMoves = filterPossibleMoves({
    allPossibleMoves: kingAllPossibleMoves,
    chessPosition,
    pieceColor,
  });

  return kingMoves;
};
