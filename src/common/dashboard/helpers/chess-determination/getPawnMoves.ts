import { TURN } from "utils/constants";
import {
  BLACK_PAWN_DEFAULT_ROW,
  WHITE_PAWN_DEFAULT_ROW,
} from "./utils/constants";
import { getAllCellsPositionsByOffset } from "./utils/getAllCellsPositionsByOffset";
import { getNextCellPosition } from "./utils/getNextCellPosition";
import { getPawnOffset } from "./utils/getPawnOffset";
import { isWhiteColor } from "../isWhiteColor";
import { splitColorAndNamePiece } from "./utils/splitColorAndNamePiece";
import { isCellEmpty } from "./utils/isCellEmpty";

export const getPawnMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const [, currentRow] = currentPosition;
  const isWhite = isWhiteColor(pieceColor);
  const pawnOffset = getPawnOffset(isWhite);
  const pawnAlwaysOffset = pawnOffset.moves[0][1];

  const pawnMoves = [];

  const makeCapturePiece = ({ pawnMoves, capturePieceMoves }) => {
    for (let i = 0; i < capturePieceMoves.length; i++) {
      const [nextPieceColor] = splitColorAndNamePiece({
        chessPosition,
        cell: capturePieceMoves[i],
      });
      if (nextPieceColor === (isWhite ? TURN.BLACK : TURN.WHITE)) {
        pawnMoves.push(capturePieceMoves[i]);
      }
    }
  };

  const capturePieceMoves = getAllCellsPositionsByOffset({
    currentPosition,
    offsets: pawnOffset.captureMoves,
  });

  makeCapturePiece({ pawnMoves, capturePieceMoves });

  if (
    currentRow === (isWhite ? WHITE_PAWN_DEFAULT_ROW : BLACK_PAWN_DEFAULT_ROW)
  ) {
    const nextCells = getAllCellsPositionsByOffset({
      currentPosition,
      offsets: pawnOffset.moves,
    });

    for (let i = 0; i < nextCells.length; i++) {
      const isValidMove = isCellEmpty({ chessPosition, cell: nextCells[i] });

      if (!isValidMove) {
        return;
      }

      pawnMoves.push(nextCells[i]);
    }

    return pawnMoves;
  }

  const nextCell = getNextCellPosition({
    currentPosition,
    rowOffset: pawnAlwaysOffset,
  });

  const isValidMove = isCellEmpty({ chessPosition, cell: nextCell });

  if (isValidMove) {
    pawnMoves.push(nextCell);
  }

  return pawnMoves;
};
