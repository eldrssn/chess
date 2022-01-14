import React, { useCallback, useState } from "react";

import { CellsEventProps } from "./types";
import { CellsLayout } from "layouts/cells-layout";
import { Cell } from "common/cell";
import { useTypedSelector } from "hooks/useTypedSelector";
import { selectChessPosition } from "store/reducers/chess-position/selectors";
import { getBoardArray } from "./helpers/getBoardArray";
import { selectCurrentMove } from "store/reducers/current-move/selectors";
import { whatPieceName } from "./helpers/whatPieceName";
import { PIECES_NAMES } from "./helpers/constants";
import { validateMoves } from "./helpers/validateMoves";

const validateMove = ({ typeFigure, position, schema }) => {
  // !TODO: создать валидацию ходов для каждой фигуры через хешмапу
  const figureValidations = {
    ["rogue"]: (position) => {},
    ["knight"]: () => {},
    spawn: () => {},
  };

  return figureValidations[typeFigure] || figureValidations["spawn"];
};

export const Dashboard = () => {
  const [choosenCell, setChoosenCell] = useState<string>("");

  // getChoosenCell
  const onCellsClick = (event: CellsEventProps) => {
    setChoosenCell(event.target.id);
  };

  const schema = getBoardArray(true);

  const { chessColor } = useTypedSelector(selectCurrentMove);

  const chessPosition = useTypedSelector(selectChessPosition);

  const getAllowedCells = useCallback(() => {
    if (!choosenCell) {
      return Object.keys(chessPosition).filter((cell) =>
        chessPosition[cell].includes(chessColor)
      );
    }

    if (
      chessPosition[choosenCell] &&
      (chessPosition[choosenCell].includes("rook") ||
        chessPosition[choosenCell].includes("bishop") ||
        chessPosition[choosenCell].includes("queen") ||
        chessPosition[choosenCell].includes("king") ||
        chessPosition[choosenCell].includes("knight") ||
        chessPosition[choosenCell].includes("pawn"))
    ) {
      return validateMoves(chessPosition, choosenCell);
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

  const allowedCells = getAllowedCells();

  return (
    <CellsLayout onClick={onCellsClick}>
      {schema.map((cell) => (
        <Cell
          key={cell}
          cell={cell}
          piece={chessPosition[cell]}
          choosenCell={choosenCell}
          allowedCells={allowedCells}
        />
      ))}
    </CellsLayout>
  );
};
