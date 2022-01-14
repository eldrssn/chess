import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { addBishopMoves } from "./utils/addBishopMoves";
import { DIRECTIONS } from "./utils/constants";

export const getBishopMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const bishopMoves = [];
  const [currentColumn, currentRow] = currentPosition;
  const currentRowIndex = ROW_NUMBERS.indexOf(currentRow);
  const currentColumnIndex = COLUMN_CHARS.indexOf(currentColumn);

  const BISHOP_DIRECTIONS = {
    upRight: true,
    downRight: true,
    downLeft: true,
    upLeft: true,
  };

  let j = currentRowIndex - 1;
  for (let i = currentColumnIndex - 1; i >= 0; i--) {
    if (BISHOP_DIRECTIONS.upLeft) {
      addBishopMoves({
        columnIndex: i,
        rowIndex: j,
        chessPosition,
        directions: BISHOP_DIRECTIONS,
        direction: DIRECTIONS.UP_LEFT,
        pieceColor,
        pieceMoves: bishopMoves,
      });
    }
    j--;
  }

  j = currentRowIndex + 1;
  for (let i = currentColumnIndex + 1; i < COLUMN_CHARS.length; i++) {
    if (BISHOP_DIRECTIONS.downRight) {
      addBishopMoves({
        columnIndex: i,
        rowIndex: j,
        chessPosition,
        directions: BISHOP_DIRECTIONS,
        direction: DIRECTIONS.DOWN_RIGHT,
        pieceColor,
        pieceMoves: bishopMoves,
      });
    }

    j++;
  }

  j = currentRowIndex - 1;
  for (let i = currentColumnIndex + 1; i < COLUMN_CHARS.length; i++) {
    if (BISHOP_DIRECTIONS.upRight) {
      addBishopMoves({
        columnIndex: i,
        rowIndex: j,
        chessPosition,
        directions: BISHOP_DIRECTIONS,
        direction: DIRECTIONS.UP_RIGHT,
        pieceColor,
        pieceMoves: bishopMoves,
      });
    }
    j--;
  }

  j = currentRowIndex + 1;
  for (let i = currentColumnIndex - 1; i >= 0; i--) {
    if (BISHOP_DIRECTIONS.downLeft) {
      addBishopMoves({
        columnIndex: i,
        rowIndex: j,
        chessPosition,
        directions: BISHOP_DIRECTIONS,
        direction: DIRECTIONS.DOWN_LEFT,
        pieceColor,
        pieceMoves: bishopMoves,
      });
    }
    j++;
  }

  return bishopMoves;
};
