import { PIECES_NAMES } from "./utils/constants";
import { getRookMoves } from "./getRookMoves";
import { splitColorAndNamePiece } from "./utils/splitColorAndNamePiece";
import { getBishopMoves } from "./getBishopMoves";
import { getKingMoves } from "./getKingMoves";
import { getKnightMoves } from "./getKnightMoves";
import { getPawnMoves } from "./getPawnMoves";
import { IPieceValidation, IValidateMoves } from "./types";

const pieceValidation = {
  [PIECES_NAMES.ROOK]: ({
    pieceColor,
    cell,
    chessPosition,
  }: IPieceValidation) => {
    return getRookMoves({ currentPosition: cell, pieceColor, chessPosition });
  },
  [PIECES_NAMES.BISHOP]: ({
    pieceColor,
    cell,
    chessPosition,
  }: IPieceValidation) => {
    return getBishopMoves({ currentPosition: cell, pieceColor, chessPosition });
  },
  [PIECES_NAMES.QUEEN]: ({
    pieceColor,
    cell,
    chessPosition,
  }: IPieceValidation) => {
    const rookMoves = getRookMoves({
      currentPosition: cell,
      pieceColor,
      chessPosition,
    });

    const bishopMoves = getBishopMoves({
      currentPosition: cell,
      pieceColor,
      chessPosition,
    });

    return [...rookMoves, ...bishopMoves];
  },
  [PIECES_NAMES.KING]: ({
    pieceColor,
    cell,
    chessPosition,
  }: IPieceValidation) => {
    return getKingMoves({ currentPosition: cell, pieceColor, chessPosition });
  },
  [PIECES_NAMES.KNIGHT]: ({
    pieceColor,
    cell,
    chessPosition,
  }: IPieceValidation) => {
    return getKnightMoves({ currentPosition: cell, pieceColor, chessPosition });
  },
  [PIECES_NAMES.PAWN]: ({
    pieceColor,
    cell,
    chessPosition,
  }: IPieceValidation) => {
    return getPawnMoves({ currentPosition: cell, pieceColor, chessPosition });
  },
};

export const validateMoves = ({ chessPosition, cell }: IValidateMoves) => {
  if (!chessPosition[cell]) {
    return;
  }

  const [pieceColor, pieceName] = splitColorAndNamePiece({
    chessPosition,
    cell,
  });

  const getPieceMoves =
    pieceValidation[pieceName]({ pieceColor, cell, chessPosition }) || null;

  return getPieceMoves;
};
