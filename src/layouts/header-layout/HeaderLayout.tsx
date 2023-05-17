import React from "react";
import styles from "./header-layout.module.scss";

export const HeaderLayout: React.FC = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};
