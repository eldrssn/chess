import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { getBishopNextCellPosition } from "./utils/getBishopNextCellPosition";
import { isNextCellEmpty } from "./utils/isNextCellEmpty";
import { isNextCellHasOppositeColor } from "./utils/isNextCellHasOppositeColor";
import { isNextCellHasSameColor } from "./utils/isNextCellHasSameColor";

export const getBishopMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const bishopMoves = [];
  const [currentColumn, currentRow] = currentPosition;
  const currentRowIndex = ROW_NUMBERS.indexOf(currentRow);
  const currentColumnIndex = COLUMN_CHARS.indexOf(currentColumn);

  // !TODO: оптимизировать алгоритм
  let j = currentRowIndex - 1;
  for (let i = currentColumnIndex - 1; i >= 0; i--) {

    const nextCellPosition = getBishopNextCellPosition(i, j);

    const isEmptyCell = isNextCellEmpty(chessPosition, nextCellPosition);
    const isSameCellColor = isNextCellHasSameColor(chessPosition, nextCellPosition, pieceColor);
    const isOppositeCellColor = isNextCellHasOppositeColor(chessPosition, nextCellPosition, pieceColor)

    if (isEmptyCell) {
      bishopMoves.push(nextCellPosition);
    }
    if (isOppositeCellColor) {
      bishopMoves.push(nextCellPosition);
      break;
    } 
    if (isSameCellColor) {
      break;
    }

    j--;
  }

  j = currentRowIndex + 1;
  for (let i = currentColumnIndex + 1; i < COLUMN_CHARS.length; i++) {
    const nextCellPosition = getBishopNextCellPosition(i, j);

    const isEmptyCell = isNextCellEmpty(chessPosition, nextCellPosition);
    const isSameCellColor = isNextCellHasSameColor(chessPosition, nextCellPosition, pieceColor);
    const isOppositeCellColor = isNextCellHasOppositeColor(chessPosition, nextCellPosition, pieceColor)

    if (isEmptyCell) {
      bishopMoves.push(nextCellPosition);
    }
    if (isOppositeCellColor) {
      bishopMoves.push(nextCellPosition);
      break;
    } 
    if (isSameCellColor) {
      break;
    }

    j++;
  }

  j = currentRowIndex - 1;
  for (let i = currentColumnIndex + 1; i < COLUMN_CHARS.length; i++) {
    const nextCellPosition = getBishopNextCellPosition(i, j);

    const isEmptyCell = isNextCellEmpty(chessPosition, nextCellPosition);
    const isSameCellColor = isNextCellHasSameColor(chessPosition, nextCellPosition, pieceColor);
    const isOppositeCellColor = isNextCellHasOppositeColor(chessPosition, nextCellPosition, pieceColor)

    if (isEmptyCell) {
      bishopMoves.push(nextCellPosition);
    }
    if (isOppositeCellColor) {
      bishopMoves.push(nextCellPosition);
      break;
    } 
    if (isSameCellColor) {
      break;
    }

    j--;
  }

  j = currentRowIndex + 1;
  for (let i = currentColumnIndex - 1; i >= 0; i--) {
    const nextCellPosition = getBishopNextCellPosition(i, j);

    const isEmptyCell = isNextCellEmpty(chessPosition, nextCellPosition);
    const isSameCellColor = isNextCellHasSameColor(chessPosition, nextCellPosition, pieceColor);
    const isOppositeCellColor = isNextCellHasOppositeColor(chessPosition, nextCellPosition, pieceColor)

    if (isEmptyCell) {
      bishopMoves.push(nextCellPosition);
    }
    if (isOppositeCellColor) {
      bishopMoves.push(nextCellPosition);
      break;
    } 
    if (isSameCellColor) {
      break;
    }

    j++;
  }

  return bishopMoves;
};
