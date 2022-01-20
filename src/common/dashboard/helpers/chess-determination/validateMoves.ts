import { PIECES_NAMES } from "./utils/constants";
import { getRookMoves } from "./getRookMoves";
import { splitColorAndNamePiece } from "./utils/splitColorAndNamePiece";
import { getBishopMoves } from "./getBishopMoves";
import { getKingMoves } from "./getKingMoves";
import { getKnightMoves } from "./getKnightMoves";
import { getPawnMoves } from "./getPawnMoves";

const pieceValidation = {
  [PIECES_NAMES.ROOK]: (
    pieceColor: string,
    currentPosition: string,
    chessPosition: Record<string, string>
  ) => {
    return getRookMoves({ currentPosition, pieceColor, chessPosition });
  },
  [PIECES_NAMES.BISHOP]: (
    pieceColor: string,
    currentPosition: string,
    chessPosition: Record<string, string>
  ) => {
    return getBishopMoves({ currentPosition, pieceColor, chessPosition });
  },
  [PIECES_NAMES.QUEEN]: (
    pieceColor: string,
    currentPosition: string,
    chessPosition: Record<string, string>
  ) => {
    const rookMoves = getRookMoves({
      currentPosition,
      pieceColor,
      chessPosition,
    });

    const bishopMoves = getBishopMoves({
      currentPosition,
      pieceColor,
      chessPosition,
    });

    return [...rookMoves, ...bishopMoves];
  },
  [PIECES_NAMES.KING]: (
    pieceColor: string,
    currentPosition: string,
    chessPosition: Record<string, string>
  ) => {
    return getKingMoves({ currentPosition, pieceColor, chessPosition });
  },
  [PIECES_NAMES.KNIGHT]: (
    pieceColor: string,
    currentPosition: string,
    chessPosition: Record<string, string>
  ) => {
    return getKnightMoves({ currentPosition, pieceColor, chessPosition });
  },
  [PIECES_NAMES.PAWN]: (
    pieceColor: string,
    currentPosition: string,
    chessPosition: Record<string, string>
  ) => {
    return getPawnMoves({ currentPosition, pieceColor, chessPosition });
  },
};

export const validateMoves = (
  chessPosition: Record<string, string>,
  choosenCell: string
) => {
  if (!chessPosition[choosenCell]) {
    return;
  }

  const [pieceColor, pieceName] = splitColorAndNamePiece(
    chessPosition,
    choosenCell
  );

  const getPieceMoves = pieceValidation[pieceName](pieceColor, choosenCell, chessPosition) || null;

  return getPieceMoves;
};
