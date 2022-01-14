import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";

import classNames from "classnames/bind";

import { useTypedSelector } from "hooks/useTypedSelector";

import { getIsWhite } from "./helpers/getIsWhite";

import { CellProps } from "./types";

import {
  capturePiece,
  changeTurn,
  setChoosenPiece,
} from "store/reducers/current-move/actions";
import { selectCurrentMove } from "store/reducers/current-move/selectors";
import { updateChessPosition } from "store/reducers/chess-position/actions";
import { selectChessPosition } from "store/reducers/chess-position/selectors";

import styles from "./cell.module.scss";
import { getPieceImageSource } from "utils/helpers/getPieceImageSource";

const cn = classNames.bind(styles);

export const Cell: FC<CellProps> = ({
  cell,
  piece,
  choosenCell,
  allowedCells,
}) => {
  const { fromCell, choosenPiece, moveToCell, chessColor } =
    useTypedSelector(selectCurrentMove);
  const chessPosition = useTypedSelector(selectChessPosition);

  const isWhite = getIsWhite(cell);
  const dispatch = useDispatch();

  const pieceImageSource = getPieceImageSource(piece);

  const isCanCellClick = () =>
    choosenCell === cell && !!piece && piece.includes(chessColor);

  const isPossibleMove = () =>
    allowedCells.includes(cell) &&
    !!choosenPiece &&
    choosenPiece.includes(chessColor);

  const onClickCell = () => {
    dispatch(
      setChoosenPiece({
        fromCell: cell,
        choosenPiece: piece,
      })
    );

    if (
      choosenCell &&
      fromCell &&
      choosenPiece &&
      choosenPiece.includes(chessColor) &&
      choosenCell !== cell &&
      allowedCells.includes(cell)
    ) {
      if (chessPosition[cell] && allowedCells.includes(cell)) {
        dispatch(capturePiece(chessPosition[cell]));
      }

      dispatch(
        updateChessPosition({ choosenPiece, fromCell, moveToCell: cell })
      );
      dispatch(changeTurn());
    }
  };

  return (
    <div
      className={cn(styles.cell, {
        [styles.cellBlack]: !isWhite,
        [styles.cellWhite]: isWhite,
        [styles.cellActive]: isCanCellClick(),
        [styles.cellPossibleMove]: isPossibleMove(),
      })}
      id={cell}
      onClick={onClickCell}
    >
      {piece && (
        <img
          id={cell}
          className={styles.pieceImg}
          src={pieceImageSource}
          alt="piece"
          width={60}
          height={60}
        />
      )}
      <span>{cell}</span>
    </div>
  );
};
