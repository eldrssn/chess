import { COLUMN_CHARS, ROW_NUMBERS, TURN } from "utils/constants";
import { blackPawnDefaultRow, whitePawnDefaultRow } from "./constants";
import { isWhiteColor } from "./isWhiteColor";
import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

// !TODO: оптимизировать как то работу циклов и убрать лишние повторения
export const getPawnMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const [currentColumn, currentRow] = currentPosition;
  const currentRowIndex = ROW_NUMBERS.indexOf(currentRow);
  const currentColumnIndex = COLUMN_CHARS.indexOf(currentColumn);
  const isWhite = isWhiteColor(pieceColor);

  const pawnMoves = [];

  const checkValidPawnMove = ({ pawnMoves, nextCell }) => {
    const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);

    if (nextPieceColor) {
      return false;
    }

    pawnMoves.push(nextCell);
    return true;
  };

  const checkCanCapturePiece = ({ pawnMoves, capturePieceMoves }) => {
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

  const nextCell = `${
    COLUMN_CHARS[currentColumnIndex] +
    ROW_NUMBERS[currentRowIndex + (isWhite ? -1 : 1)]
  }`;

  const capturePieceMoves = [
    `${
      COLUMN_CHARS[currentColumnIndex + 1] +
      ROW_NUMBERS[currentRowIndex + (isWhite ? -1 : 1)]
    }`,
    `${
      COLUMN_CHARS[currentColumnIndex - 1] +
      ROW_NUMBERS[currentRowIndex + (isWhite ? -1 : 1)]
    }`,
  ];

  checkCanCapturePiece({ pawnMoves, capturePieceMoves });
  checkValidPawnMove({ pawnMoves, nextCell });

  if (currentRow === (isWhite ? whitePawnDefaultRow : blackPawnDefaultRow)) {
    const nextCells = [
      nextCell,
      `${
        COLUMN_CHARS[currentColumnIndex] +
        ROW_NUMBERS[currentRowIndex + (isWhite ? -2 : 2)]
      }`,
    ];

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
