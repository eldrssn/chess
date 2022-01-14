import { PIECES_NAMES } from "./constants";
import { ROW_NUMBERS, COLUMN_CHARS } from "utils/constants";

// export const COLUMN_CHARS = ["a", "b", "c", "d", "e", "f", "g", "h"];
// export const ROW_NUMBERS = ["8", "7", "6", "5", "4", "3", "2", "1"];

const pieceValidation = {
  [PIECES_NAMES.ROOK]: (position = "ROOK") => {
    const [column, row] = position; // [a, 1]

    const result = [];

    ROW_NUMBERS.forEach((num) => {
      result.push(`${column + num}`);
    });

    COLUMN_CHARS.forEach((char) => {
      result.push(`${char + row}`);
    });

    return [...result];
  },
  [PIECES_NAMES.BISHOP]: (position = "BISHOP") => {
    return [...position];
  },
  [PIECES_NAMES.KING]: (position = "KING") => {
    return [...position];
  },
  [PIECES_NAMES.KNIGHT]: (position = "KNIGHT") => {
    return [...position];
  },
  [PIECES_NAMES.PAWN]: (position = "PAWN") => {
    return [...position];
  },
  [PIECES_NAMES.QUEEN]: (position = "QUEEN") => {
    return [...position];
  },
};

export const validateMoves = ({
  pieceTypeName,
  choosenCellPosition,
}: Record<string, string>) => {
  return pieceValidation[pieceTypeName]
    ? pieceValidation[pieceTypeName](choosenCellPosition)
    : null;
};
