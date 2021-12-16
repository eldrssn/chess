import React from "react";

import classNames from "classnames/bind";

import { CHESS_MAP } from "./helpers/constants";

import styles from "./game-page.module.scss";

const cn = classNames.bind(styles);

console.log(Object.entries(CHESS_MAP).map(([key, value]) => key + value));

export enum CellColor {
  White = "white",
  Black = "black",
}

export const GamePage = () => {
  const columnLettes = ["a", "b", "c"];

  const rowNunbers = ["1", "2", "3"];

  "a1"[0][1];

  for (let i = 0; i < rowNunbers.length; i++) {
    console.log(columnLettes.map((letter) => `${letter}${rowNunbers[i]}`));
  }

  return (
    <div className={cn(styles.gamePage)}>
      {Object.entries(CHESS_MAP).map(([key, ddh]) => {
        return (
          <div
            key={key}
            id={key}
            className={cn(
              styles["game-page__box"],
              styles[`game-page__${CellColor.Black}`]
            )}
          >
            box
          </div>
        );
      })}
    </div>
  );
};
