import React, { Dispatch, FC } from "react";
import { useDispatch } from "react-redux";

import classNames from "classnames/bind";

import { useTypedSelector } from "hooks/useTypedSelector";

import { getIsWhite } from "./helpers/getIsWhite";
import { isChoosenCell } from "./helpers/isChoosenCell";
import { getPieceImageSource } from "utils/getPieceImageSource";

import { setChoosenPiece } from "store/reducers/turnsAndRules/actions";
import { selectTurnsAndRules } from "store/reducers/turnsAndRules/selectors";

import { AppDispatch } from "store/configureStore/types";
import { CellProps } from "./types";

import styles from "./cell.module.scss";

const cn = classNames.bind(styles);

export const Cell: FC<CellProps> = ({ cell, piece, choosenCell }) => {
  const { fromCell, choosenPiece, moveToCell } =
    useTypedSelector(selectTurnsAndRules);

  const isWhite = getIsWhite(cell);
  const dispatch: AppDispatch = useDispatch();

  const pieceImageSource = getPieceImageSource(piece);

  const getCanCellClick = () => {
    return isChoosenCell({ choosenCell, cell }) && !!piece;
  };

  const isCanCellClick = getCanCellClick();

  const onClickCell = () => {
    dispatch(
      setChoosenPiece({
        fromCell: cell,
        choosenPiece: piece,
      })
    );
  };

  return (
    <div
      className={cn(styles.cell, {
        [styles.cellBlack]: !isWhite,
        [styles.cellWhite]: isWhite,
        [styles.cellClicked]: isCanCellClick,
        // ниже уже написанный стиль для подцветки потенциальных ходов
        // [styles.cellPossibleMove]: isPossibleMoveClick,
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
      {/* <span>{cell}</span> */}
    </div>
  );
};
