import React, { FC } from "react";
import { useDispatch } from "react-redux";

import classNames from "classnames/bind";

import { useTypedSelector } from "hooks/useTypedSelector";

import { getIsWhiteCellColor } from "./helpers/getIsWhiteCellColor";
import { getPieceImageSource } from "utils/helpers/getPieceImageSource";

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

const cn = classNames.bind(styles);

export const Cell: FC<CellProps> = ({
  cellPosition,
  pieceType,
  choosenCellPosition,
  allowedCellsPositions,
}) => {
  const { fromCellPosition, choosenPieceType, chessPlayerColor } =
    useTypedSelector(selectCurrentMove);
  const chessPosition = useTypedSelector(selectChessPosition);

  const isWhiteCellColor = getIsWhiteCellColor(cellPosition);
  const dispatch = useDispatch();

  const pieceImageSource = getPieceImageSource(pieceType);

  const isCanCellClick = () =>
    choosenCellPosition === cellPosition &&
    !!pieceType &&
    pieceType.includes(chessPlayerColor);

  const isPossibleMove = () =>
    // !TODO: переработать эту логику
    allowedCellsPositions.includes(cellPosition) &&
    !!choosenPieceType &&
    choosenPieceType?.includes(chessPlayerColor);

  const onClickCell = () => {
    dispatch(
      setChoosenPiece({
        fromCellPosition: cellPosition,
        choosenPieceType: pieceType,
      })
    );

    if (
      // !TODO: переработать эту логику
      choosenCellPosition &&
      fromCellPosition &&
      choosenPieceType &&
      choosenPieceType.includes(chessPlayerColor) &&
      choosenCellPosition !== cellPosition &&
      allowedCellsPositions.includes(cellPosition)
    ) {
      if (
        chessPosition[cellPosition] &&
        allowedCellsPositions.includes(cellPosition)
      ) {
        dispatch(capturePiece(chessPosition[cellPosition]));
      }

      dispatch(
        updateChessPosition({
          choosenPieceType,
          fromCellPosition,
          toCellPosition: cellPosition,
        })
      );
      dispatch(changeTurn());
    }
  };

  return (
    <div
      className={cn(styles.cell, {
        [styles.cellBlack]: !isWhiteCellColor,
        [styles.cellWhite]: isWhiteCellColor,
        [styles.cellActive]: isCanCellClick(),
        [styles.cellPossibleMove]: isPossibleMove(),
      })}
      id={cellPosition}
      onClick={onClickCell}
    >
      {pieceType && (
        <img
          id={cellPosition}
          className={styles.pieceImg}
          src={pieceImageSource}
          alt="piece"
          width={60}
          height={60}
        />
      )}
      <span>{cellPosition}</span>
    </div>
  );
};
