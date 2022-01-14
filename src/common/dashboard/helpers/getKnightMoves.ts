import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

// export const COLUMN_CHARS = ["a", "b", "c", "d", "e", "f", "g", "h"];
// export const ROW_NUMBERS = ["8", "7", "6", "5", "4", "3", "2", "1"];

// !TODO: оптимизировать как то работу циклов и убрать лишние повторения
export const getKnightMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const [currentColumn, currentRow] = currentPosition;
  const currentRowIndex = ROW_NUMBERS.indexOf(currentRow);
  const currentColumnIndex = COLUMN_CHARS.indexOf(currentColumn);

  const knightAllPossibleMoves = [
    `${
      COLUMN_CHARS[currentColumnIndex + 2] + ROW_NUMBERS[currentRowIndex + 1]
    }`,
    `${
      COLUMN_CHARS[currentColumnIndex + 1] + ROW_NUMBERS[currentRowIndex + 2]
    }`,
    `${
      COLUMN_CHARS[currentColumnIndex - 1] + ROW_NUMBERS[currentRowIndex + 2]
    }`,
    `${
      COLUMN_CHARS[currentColumnIndex - 2] + ROW_NUMBERS[currentRowIndex + 1]
    }`,
    `${
      COLUMN_CHARS[currentColumnIndex - 2] + ROW_NUMBERS[currentRowIndex - 1]
    }`,
    `${
      COLUMN_CHARS[currentColumnIndex - 1] + ROW_NUMBERS[currentRowIndex - 2]
    }`,
    `${
      COLUMN_CHARS[currentColumnIndex + 1] + ROW_NUMBERS[currentRowIndex - 2]
    }`,
    `${
      COLUMN_CHARS[currentColumnIndex + 2] + ROW_NUMBERS[currentRowIndex - 1]
    }`,
  ];

  const knightMoves = knightAllPossibleMoves.filter((cell) => {
    const [nextPieceColor] = splitColorAndNamePiece(chessPosition, cell);
    return nextPieceColor !== pieceColor;
  });

  return knightMoves;
};
