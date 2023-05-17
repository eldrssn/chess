import React from "react";
import styles from "./app-layout.module.scss";

export const AppLayout: React.FC = ({ children }) => {
  return <div className={styles.app}>{children}</div>;
};
