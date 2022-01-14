import React, { FC } from "react";

import { InfoBlockLayout } from "layouts/info-block-layout/InfoBlockLayout";

import { InfoBlockProps } from "./types";
import { useTypedSelector } from "hooks/useTypedSelector";
import { selectCurrentMove } from "store/reducers/current-move/selectors";

import styles from "./info-block.module.scss";
import { getPieceImageSource } from "utils/helpers/getPieceImageSource";
import { TURN } from "utils/constants";

export const InfoBlock: FC<InfoBlockProps> = ({ turn }) => {
  const { chessPlayerColor, captureByBlackChess, captureByWhiteChess } =
    useTypedSelector(selectCurrentMove);

  // !TODO: вынести в отдельную функцию
  const isTurn = chessPlayerColor === turn;

  const capturePieces =
    turn === TURN.BLACK ? captureByBlackChess : captureByWhiteChess;

  return (
    <InfoBlockLayout isCurrentTurn={isTurn}>
      <p>тут чей ход</p>
      <div className={styles.pieceWrapper}>
        {capturePieces.map((piece, index) => {
          return (
            <img
              key={index}
              className={styles.piece}
              src={getPieceImageSource(piece)}
              alt="piece"
              width={40}
              height={40}
            />
          );
        })}
      </div>
    </InfoBlockLayout>
  );
};
