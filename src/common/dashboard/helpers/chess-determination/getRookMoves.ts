import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { addRookMoves } from "./utils/addRookMoves";
import { DIRECTIONS } from "./utils/constants";

export const getRookMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const rookMoves = [];
  const [currentColumn, currentRow] = currentPosition;
  const currentRowIndex = ROW_NUMBERS.indexOf(currentRow);
  const currentColumnIndex = COLUMN_CHARS.indexOf(currentColumn);

  const ROOK_DIRECTIONS = {
    up: true,
    down: true,
    left: true,
    right: true,
  };

  for (let i = currentRowIndex - 1; i >= 0; i--) {
    if (ROOK_DIRECTIONS.up) {
      addRookMoves({
        index: i,
        directions: ROOK_DIRECTIONS,
        direction: DIRECTIONS.UP,
        chessPosition,
        pieceColor,
        pieceMoves: rookMoves,
        currentPosition,
      });
    }
  }

  for (let i = currentRowIndex + 1; i < ROW_NUMBERS.length; i++) {
    if (ROOK_DIRECTIONS.right) {
      addRookMoves({
        index: i,
        directions: ROOK_DIRECTIONS,
        direction: DIRECTIONS.RIGHT,
        chessPosition,
        pieceColor,
        pieceMoves: rookMoves,
        currentPosition,
      });
    }
  }

  for (let i = currentColumnIndex - 1; i >= 0; i--) {
    if (ROOK_DIRECTIONS.left) {
      addRookMoves({
        index: i,
        directions: ROOK_DIRECTIONS,
        direction: DIRECTIONS.LEFT,
        chessPosition,
        pieceColor,
        pieceMoves: rookMoves,
        currentPosition,
      });
    }
  }

  for (let i = currentColumnIndex + 1; i < ROW_NUMBERS.length; i++) {
    if (ROOK_DIRECTIONS.down) {
      addRookMoves({
        index: i,
        directions: ROOK_DIRECTIONS,
        direction: DIRECTIONS.DOWN,
        chessPosition,
        pieceColor,
        pieceMoves: rookMoves,
        currentPosition,
      });
    }
  }

  return rookMoves;
};
