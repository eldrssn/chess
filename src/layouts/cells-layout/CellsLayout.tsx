import React, { FC } from "react";
import { CellsLayoutProps } from "./types";
import styles from "./cells-layout.module.scss";

export const CellsLayout: FC<CellsLayoutProps> = ({ onClick, children }) => (
    <div onClick={onClick} className={styles.cells}>
        {children}
    </div>
);
