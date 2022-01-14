import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { splitColorAndNamePiece } from "./splitColorAndNamePiece";

// !TODO: оптимизировать как то работу циклов и убрать лишние повторения
export const getRookMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const rookMoves = [];
  const [currentColumn, currentRow] = currentPosition;
  const currentRowIndex = ROW_NUMBERS.indexOf(currentRow);
  const currentColumnIndex = COLUMN_CHARS.indexOf(currentColumn);

  for (let i = currentRowIndex - 1; i >= 0; i--) {
    const nextCell = `${currentColumn + ROW_NUMBERS[i]}`;
    const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);

    if (nextPieceColor === pieceColor) {
      break;
    }

    if (nextPieceColor && nextPieceColor !== pieceColor) {
      rookMoves.push(nextCell);
      break;
    }

    rookMoves.push(nextCell);
  }

  for (let i = currentRowIndex + 1; i < ROW_NUMBERS.length; i++) {
    const nextCell = `${currentColumn + ROW_NUMBERS[i]}`;
    const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);
    if (nextPieceColor === pieceColor) {
      break;
    }
    if (nextPieceColor && nextPieceColor !== pieceColor) {
      rookMoves.push(nextCell);
      break;
    }

    rookMoves.push(nextCell);
  }

  for (let i = currentColumnIndex - 1; i >= 0; i--) {
    const nextCell = `${COLUMN_CHARS[i] + currentRow}`;
    const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);
    if (nextPieceColor === pieceColor) {
      break;
    }
    if (nextPieceColor && nextPieceColor !== pieceColor) {
      rookMoves.push(nextCell);
      break;
    }

    rookMoves.push(nextCell);
  }

  for (let i = currentColumnIndex + 1; i < ROW_NUMBERS.length; i++) {
    const nextCell = `${COLUMN_CHARS[i] + currentRow}`;
    const [nextPieceColor] = splitColorAndNamePiece(chessPosition, nextCell);
    if (nextPieceColor === pieceColor) {
      break;
    }
    if (nextPieceColor && nextPieceColor !== pieceColor) {
      rookMoves.push(nextCell);
      break;
    }

    rookMoves.push(nextCell);
  }

  return rookMoves;
};
