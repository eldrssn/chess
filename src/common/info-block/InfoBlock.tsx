import React, { FC } from "react";

import { InfoBlockLayout } from "layouts/info-block-layout/InfoBlockLayout";
import { useTypedSelector } from "hooks/useTypedSelector";
import { selectCurrentMove } from "store/reducers/current-move/selectors";
import { getPieceImageSource } from "utils/helpers/getPieceImageSource";
import { TURN } from "utils/constants";

import { InfoBlockProps } from "./types";
import styles from "./info-block.module.scss";

export const InfoBlock: FC<InfoBlockProps> = ({ turn }) => {
  const {
    chessPlayerColor,
    piecesCaptureByBlackChess,
    piecesCaptureByWhiteChess,
  } = useTypedSelector(selectCurrentMove);

  const isTurn = chessPlayerColor === turn;
  const isBlack = turn === TURN.BLACK;

  const capturePieces = isBlack ? piecesCaptureByBlackChess : piecesCaptureByWhiteChess;

  return (
    <InfoBlockLayout isCurrentTurn={isTurn}>
      <p>Player {isBlack ? 2 : 1}</p>
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
