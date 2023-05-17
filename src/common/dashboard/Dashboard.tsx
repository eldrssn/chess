import React, { useCallback, useState } from "react";

import { selectCurrentMove } from "store/reducers/current-move/selectors";
import { selectChessPosition } from "store/reducers/chess-position/selectors";

import { CellsLayout } from "layouts/cells-layout";
import { Cell } from "common/cell";

import { useTypedSelector } from "hooks/useTypedSelector";

import { getBoardArray, validateMoves } from "./helpers";
import { CellsEventProps } from "./types";

export const Dashboard = () => {
  const [choosenCellPosition, setChoosenCellPosition] = useState<string>("");

  const onCellsClick = (event: CellsEventProps) => {
    setChoosenCellPosition(event.target.id);
  };

  const schema = getBoardArray(true);

  const { chessPlayerColor } = useTypedSelector(selectCurrentMove);

  const chessPosition = useTypedSelector(selectChessPosition);

  const getAllowedCellsPositions = useCallback(() => {
    if (!choosenCellPosition) {
      return Object.keys(chessPosition).filter((cellPosition) =>
        chessPosition[cellPosition].includes(chessPlayerColor)
      );
    }

    return validateMoves({ chessPosition, cell: choosenCellPosition });
  }, [choosenCellPosition]);

  const allowedCellsPosition = getAllowedCellsPositions();

  return (
    <CellsLayout onClick={onCellsClick}>
      {schema.map((cellPosition) => (
        <Cell
          key={cellPosition}
          cellPosition={cellPosition}
          pieceType={chessPosition[cellPosition]}
          choosenCellPosition={choosenCellPosition}
          allowedCellsPositions={allowedCellsPosition}
        />
      ))}
    </CellsLayout>
  );
};
