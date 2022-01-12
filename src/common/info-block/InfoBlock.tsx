import React, { FC } from "react";

import { InfoBlockLayout } from "layouts/info-block-layout/InfoBlockLayout";

import { InfoBlockProps } from "./types";
import { useTypedSelector } from "hooks/useTypedSelector";
import { selectCurrentMove } from "store/reducers/current-move/selectors";

import styles from "./info-block.module.scss";
import { getPieceImageSource } from "utils/helpers/getPieceImageSource";

export const InfoBlock: FC<InfoBlockProps> = ({ turn }) => {
  const { chessColor, captureByBlack, captureByWhite } =
    useTypedSelector(selectCurrentMove);

  const isTurn = chessColor === turn;

  const capturePieces = turn === "black" ? captureByBlack : captureByWhite;

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
