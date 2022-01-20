import { COLUMN_CHARS, ROW_NUMBERS } from "utils/constants";
import { addRookMove } from "./utils/addRookMove";
import { DIRECTIONS } from "./utils/constants";
import { isNextCellEmpty } from "./utils/isNextCellEmpty";
import { isNextCellHasOppositeColor } from "./utils/isNextCellHasOppositeColor";
import { isNextCellHasSameColor } from "./utils/isNextCellHasSameColor";

export const getRookMoves = ({
  currentPosition,
  pieceColor,
  chessPosition,
}) => {
  const rookMoves = [];
  const [currentColumn, currentRow] = currentPosition;
  const currentRowIndex = ROW_NUMBERS.indexOf(currentRow);
  const currentColumnIndex = COLUMN_CHARS.indexOf(currentColumn);


  // !TODO: оптимизировать алгоритм
  for (let i = currentRowIndex - 1; i >= 0; i--) {
    const nextCellPosition = addRookMove({
      index: i,
      direction: DIRECTIONS.UP,
      currentPosition,
    })
    
    const isEmptyCell = isNextCellEmpty(chessPosition, nextCellPosition);
    const isSameCellColor = isNextCellHasSameColor(chessPosition, nextCellPosition, pieceColor);
    const isOppositeCellColor = isNextCellHasOppositeColor(chessPosition, nextCellPosition, pieceColor)

    if (isEmptyCell) {
      rookMoves.push(nextCellPosition);
    }
    if (isOppositeCellColor) {
      rookMoves.push(nextCellPosition);
      break;
    } 
    if (isSameCellColor) {
      break;
    }
  }

  for (let i = currentRowIndex + 1; i < ROW_NUMBERS.length; i++) {
    const nextCellPosition = addRookMove({
      index: i,
      direction: DIRECTIONS.RIGHT,
      currentPosition,
    })
    
    const isEmptyCell = isNextCellEmpty(chessPosition, nextCellPosition);
    const isSameCellColor = isNextCellHasSameColor(chessPosition, nextCellPosition, pieceColor);
    const isOppositeCellColor = isNextCellHasOppositeColor(chessPosition, nextCellPosition, pieceColor)

    if (isEmptyCell) {
      rookMoves.push(nextCellPosition);
    }
    if (isOppositeCellColor) {
      rookMoves.push(nextCellPosition);
      break;
    } 
    if (isSameCellColor) {
      break;
    }
  }

  for (let i = currentColumnIndex - 1; i >= 0; i--) {
    const nextCellPosition = addRookMove({
      index: i,
      direction: DIRECTIONS.LEFT,
      currentPosition,
    })
    
    const isEmptyCell = isNextCellEmpty(chessPosition, nextCellPosition);
    const isSameCellColor = isNextCellHasSameColor(chessPosition, nextCellPosition, pieceColor);
    const isOppositeCellColor = isNextCellHasOppositeColor(chessPosition, nextCellPosition, pieceColor)

    if (isEmptyCell) {
      rookMoves.push(nextCellPosition);
    }
    if (isOppositeCellColor) {
      rookMoves.push(nextCellPosition);
      break;
    } 
    if (isSameCellColor) {
      break;
    }
  }

  for (let i = currentColumnIndex + 1; i < ROW_NUMBERS.length; i++) {
    const nextCellPosition = addRookMove({
      index: i,
      direction: DIRECTIONS.DOWN,
      currentPosition,
    })
    
    const isEmptyCell = isNextCellEmpty(chessPosition, nextCellPosition);
    const isSameCellColor = isNextCellHasSameColor(chessPosition, nextCellPosition, pieceColor);
    const isOppositeCellColor = isNextCellHasOppositeColor(chessPosition, nextCellPosition, pieceColor)

    if (isEmptyCell) {
      rookMoves.push(nextCellPosition);
    }
    if (isOppositeCellColor) {
      rookMoves.push(nextCellPosition);
      break;
    } 
    if (isSameCellColor) {
      break;
    }
  }

  return rookMoves;
};
