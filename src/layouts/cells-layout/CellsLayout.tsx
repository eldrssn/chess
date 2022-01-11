import React, { FC } from "react";
import styles from "./cells-layout.module.scss";
import { CellsLayoutProps } from "./types";

export const CellsLayout: FC<CellsLayoutProps> = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className={styles.cells}>
      {children}
    </div>
  );
};
