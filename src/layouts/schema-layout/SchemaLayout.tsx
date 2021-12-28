import React, { FC } from "react";
import styles from "./schema-layout.module.scss";
import { SchemaLayoutProps } from "./types";

export const SchemaLayout: FC<SchemaLayoutProps> = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className={styles.schema}>
      {children}
    </div>
  );
};
