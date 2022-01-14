import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

// !TODO: оптимизировать как то работу циклов и убрать лишние повторения
export const getKingMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const [currentColumn, currentRow] = currentPosition;
  const currentRowIndex = ROW_NUMBERS.indexOf(currentRow);
  const currentColumnIndex = COLUMN_CHARS.indexOf(currentColumn);

  const kingAllPossibleMoves = [
    `${COLUMN_CHARS[currentColumnIndex + 1] + ROW_NUMBERS[currentRowIndex]}`,
    `${
      COLUMN_CHARS[currentColumnIndex + 1] + ROW_NUMBERS[currentRowIndex + 1]
    }`,
    `${COLUMN_CHARS[currentColumnIndex] + ROW_NUMBERS[currentRowIndex + 1]}`,
    `${
      COLUMN_CHARS[currentColumnIndex - 1] + ROW_NUMBERS[currentRowIndex + 1]
    }`,
    `${COLUMN_CHARS[currentColumnIndex - 1] + ROW_NUMBERS[currentRowIndex]}`,
    `${
      COLUMN_CHARS[currentColumnIndex - 1] + ROW_NUMBERS[currentRowIndex - 1]
    }`,
    `${COLUMN_CHARS[currentColumnIndex] + ROW_NUMBERS[currentRowIndex - 1]}`,
    `${
      COLUMN_CHARS[currentColumnIndex + 1] + ROW_NUMBERS[currentRowIndex - 1]
    }`,
  ];

  const kingMoves = kingAllPossibleMoves.filter((cell) => {
    const [nextPieceColor] = splitColorAndNamePiece(chessPosition, cell);
    return nextPieceColor !== pieceColor;
  });

  return kingMoves;
};
