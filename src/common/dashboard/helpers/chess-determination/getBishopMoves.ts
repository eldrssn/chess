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

  // !TODO: оптимизировать алгоритм, разобраться с логикой работы в циклах
  // сдвигаем позицию влево и вниз
  // продолжаем ли проверять дальшие позиции по диагонали

  const directions = ["upAndRight", "upAndLeft", "downAndRight", "downAndLeft"];

  const getPositionAfterMove = (position, direction) => {
    // берем нужную функцию из хелпера с направления движегния и движемся на 1 клеточку по указанному нарпавлению

    return null;
  };

  const validate = (nextPosition: string, chessPosition, pieceColor) => {
    return "currentColor";
  };

  const moveByDirection = (position, direction: string) => {
    const nextPosition = getPositionAfterMove(position, direction);

    // проверяем что следащая позиция есть или если занятая клетка является того же цвета
    if (
      !nextPosition ||
      (nextPosition && validate(nextPosition, chessPosition) === "currentColor")
    ) {
      return;
    }

    // проверяем что следащая позиция занята противником
    if (validate(nextPosition, chessPosition, pieceColor) === "oppisiteColor") {
      bishopMoves.push(nextPosition);
      return;
    }

    bishopMoves.push(nextPosition);
    moveByDirection(nextPosition, direction);
  };

  directions.map((direction) => moveByDirection(direction, currentPosition));

  for (
    let i = currentColumnIndex - 1, j = currentRowIndex - 1;
    i >= 0 && j >= 0;
    i--, j--
  ) {
    const nextCellPosition = getBishopNextCellPosition(i, j);
    const isEmptyCell = isNextCellEmpty(chessPosition, nextCellPosition);
    const isSameCellColor = isNextCellHasSameColor(
      chessPosition,
      nextCellPosition,
      pieceColor
    );
    const isOppositeCellColor = isNextCellHasOppositeColor(
      chessPosition,
      nextCellPosition,
      pieceColor
    );

    if (isEmptyCell) {
      bishopMoves.push(nextCellPosition);
    }
    if (isOppositeCellColor) {
      bishopMoves.push(nextCellPosition);
      shouldContinueCheck = !isOppositeCellColor;
    }
    if (isSameCellColor) {
      shouldContinueCheck = !isSameCellColor;
    }
  }

  let j = currentRowIndex + 1;
  let shouldContinueCheck = true;
  for (let i = currentColumnIndex + 1; i < COLUMN_CHARS.length; i++) {
    if (shouldContinueCheck) {
      const nextCellPosition = getBishopNextCellPosition(i, j);

      const isEmptyCell = isNextCellEmpty(chessPosition, nextCellPosition);
      const isSameCellColor = isNextCellHasSameColor(
        chessPosition,
        nextCellPosition,
        pieceColor
      );
      const isOppositeCellColor = isNextCellHasOppositeColor(
        chessPosition,
        nextCellPosition,
        pieceColor
      );

      if (isEmptyCell) {
        return;
        bishopMoves.push(nextCellPosition);
      }
      if (isOppositeCellColor) {
        bishopMoves.push(nextCellPosition);
        shouldContinueCheck = !isOppositeCellColor;
      }
      if (isSameCellColor) {
        shouldContinueCheck = !isSameCellColor;
      }
    }

    j++;
  }

  j = currentRowIndex - 1;
  shouldContinueCheck = true;
  for (let i = currentColumnIndex + 1; i < COLUMN_CHARS.length; i++) {
    if (shouldContinueCheck) {
      const nextCellPosition = getBishopNextCellPosition(i, j);
      const isEmptyCell = isNextCellEmpty(chessPosition, nextCellPosition);
      const isSameCellColor = isNextCellHasSameColor(
        chessPosition,
        nextCellPosition,
        pieceColor
      );
      const isOppositeCellColor = isNextCellHasOppositeColor(
        chessPosition,
        nextCellPosition,
        pieceColor
      );

      if (isEmptyCell) {
        bishopMoves.push(nextCellPosition);
      }
      if (isOppositeCellColor) {
        bishopMoves.push(nextCellPosition);
        shouldContinueCheck = !isOppositeCellColor;
      }
      if (isSameCellColor) {
        shouldContinueCheck = !isSameCellColor;
      }
    }

    j--;
  }

  j = currentRowIndex + 1;
  shouldContinueCheck = true;
  for (let i = currentColumnIndex - 1; i >= 0; i--) {
    if (shouldContinueCheck) {
      const nextCellPosition = getBishopNextCellPosition(i, j);
      const isEmptyCell = isNextCellEmpty(chessPosition, nextCellPosition);
      const isSameCellColor = isNextCellHasSameColor(
        chessPosition,
        nextCellPosition,
        pieceColor
      );
      const isOppositeCellColor = isNextCellHasOppositeColor(
        chessPosition,
        nextCellPosition,
        pieceColor
      );

      if (isEmptyCell) {
        bishopMoves.push(nextCellPosition);
      }
      if (isOppositeCellColor) {
        bishopMoves.push(nextCellPosition);
        shouldContinueCheck = !isOppositeCellColor;
      }
      if (isSameCellColor) {
        shouldContinueCheck = !isSameCellColor;
      }
    }

    j++;
  }

  return bishopMoves;
};
