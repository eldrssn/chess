import { COLUMN_CHARS, ROW_NUMBERS, TURN } from "utils/constants";
import { blackPawnDefaultRow, whitePawnDefaultRow } from "./constants";
import { getCellsPositions } from "./getCellsPositions";
import { getNextCellPosition } from "./getNextCellPosition";
import { getPawnOffset } from "./getPawnOffset";
import { isWhiteColor } from "./isWhiteColor";
import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

// !TODO: оптимизировать как то работу циклов и убрать лишние повторения
export const getPawnMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const [, currentRow] = currentPosition;
  const isWhite = isWhiteColor(pieceColor);
  const pawnOffset = getPawnOffset(isWhite);
  const pawnAlwaysOffset = pawnOffset.moves[0][0];

  const pawnMoves = [];

  const checkValidPawnMove = ({ pawnMoves, nextCell }) => {
    const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);

    if (nextPieceColor) {
      return false;
    }

    pawnMoves.push(nextCell);
    return true;
  };

  const makeCapturePiece = ({ pawnMoves, capturePieceMoves }) => {
    for (let i = 0; i < capturePieceMoves.length; i++) {
      const [nextPieceColor] = splitColorAndNamePiece(
        chessPosition,
        capturePieceMoves[i]
      );
      if (nextPieceColor === (isWhite ? TURN.BLACK : TURN.WHITE)) {
        pawnMoves.push(capturePieceMoves[i]);
      }
    }
  };

  const nextCell = getNextCellPosition({
    currentPosition,
    rowOffset: pawnAlwaysOffset,
  });

  const capturePieceMoves = getCellsPositions(
    currentPosition,
    pawnOffset.captureMoves
  );

  makeCapturePiece({ pawnMoves, capturePieceMoves });
  checkValidPawnMove({ pawnMoves, nextCell });

  if (currentRow === (isWhite ? whitePawnDefaultRow : blackPawnDefaultRow)) {
    const nextCells = getCellsPositions(currentPosition, pawnOffset.moves);

    for (let i = 0; i < nextCells.length; i++) {
      const isValid = checkValidPawnMove({
        pawnMoves,
        nextCell: nextCells[i],
      });

      if (!isValid) {
        break;
      }
    }
  }

  return pawnMoves;
};
