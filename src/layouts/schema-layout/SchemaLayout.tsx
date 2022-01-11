import React from "react";

import { SchemaLayoutProps } from "types/layouts";

import styles from "./schema-layout.module.scss";

export const SchemaLayout: React.FC<SchemaLayoutProps> = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className={styles.schema}>
      {children}
    </div>
  );
};
