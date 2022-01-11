import React, { FC, useCallback } from "react";
import { Cell } from "../cell";
import { getBoardArray } from "./helpers/getBoardArray";
import { useTypedSelector } from "hooks/useTypedSelector";
import { CellsProps } from "./types";
import { selectChessPosition } from "store/reducers/chess-position/selectors";
import { selectCurrentMove } from "store/reducers/current-move/selectors";

const validateMove = ({ typeFigure, position, schema }) => {
  // !TODO: создать валидацию ходов для каждой фигуры через хешмапу
  const figureValidations = {
    ["rogue"]: (position) => {},
    ["knight"]: () => {},
    spawn: () => {},
  };

  return figureValidations[typeFigure] || figureValidations["spawn"];
};

// !TODO: объединить компонент Cells и Dashboard. компонент Cells - удалить
export const Cells: FC<CellsProps> = ({ choosenCell }) => {
  const schema = getBoardArray(true);

  const { chessColor } = useTypedSelector(selectCurrentMove);

  const chessPosition = useTypedSelector(selectChessPosition);

  const canClickCells = useCallback(() => {
    if (!choosenCell) {
      return Object.keys(chessPosition).filter((cell) =>
        chessPosition[cell].includes(chessColor)
      );
    }

    if (choosenCell) {
      // !TODO: прописать тут проверку на какая эта фигура и ее возможные ходы
      return schema
        .slice()
        .filter((cell) =>
          chessPosition[cell] ? !chessPosition[cell].includes(chessColor) : cell
        );
    }
  }, [choosenCell]);

  const allowedCells = canClickCells();

  return (
    <>
      {schema.map((cell) => (
        <Cell
          key={cell}
          cell={cell}
          piece={chessPosition[cell]}
          choosenCell={choosenCell}
          allowedCells={allowedCells}
        />
      ))}
    </>
  );
};
