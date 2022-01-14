import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

// !TODO: оптимизировать как то работу циклов и убрать лишние повторения
export const getBishopMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const bishopMoves = [];
  const [currentColumn, currentRow] = currentPosition;
  const currentRowIndex = ROW_NUMBERS.indexOf(currentRow);
  const currentColumnIndex = COLUMN_CHARS.indexOf(currentColumn);

  let j = currentRowIndex - 1;
  for (let i = currentColumnIndex - 1; i >= 0; i--) {
    const nextCell = `${COLUMN_CHARS[i] + ROW_NUMBERS[j]}`;
    const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);

    if (nextPieceColor === pieceColor) {
      break;
    }

    if (nextPieceColor && nextPieceColor !== pieceColor) {
      bishopMoves.push(nextCell);
      break;
    }

    bishopMoves.push(nextCell);
    j--;
  }

  j = currentRowIndex + 1;
  for (let i = currentColumnIndex + 1; i < COLUMN_CHARS.length; i++) {
    const nextCell = `${COLUMN_CHARS[i] + ROW_NUMBERS[j]}`;
    const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);

    if (nextPieceColor === pieceColor) {
      break;
    }

    if (nextPieceColor && nextPieceColor !== pieceColor) {
      bishopMoves.push(nextCell);
      break;
    }

    bishopMoves.push(nextCell);
    j++;
  }

  j = currentRowIndex - 1;
  for (let i = currentColumnIndex + 1; i < COLUMN_CHARS.length; i++) {
    const nextCell = `${COLUMN_CHARS[i] + ROW_NUMBERS[j]}`;
    const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);

    if (nextPieceColor === pieceColor) {
      break;
    }

    if (nextPieceColor && nextPieceColor !== pieceColor) {
      bishopMoves.push(nextCell);
      break;
    }

    bishopMoves.push(nextCell);
    j--;
  }

  j = currentRowIndex + 1;
  for (let i = currentColumnIndex - 1; i >= 0; i--) {
    const nextCell = `${COLUMN_CHARS[i] + ROW_NUMBERS[j]}`;
    const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);

    if (nextPieceColor === pieceColor) {
      break;
    }

    if (nextPieceColor && nextPieceColor !== pieceColor) {
      bishopMoves.push(nextCell);
      break;
    }

    bishopMoves.push(nextCell);
    j++;
  }

  return bishopMoves;
};
