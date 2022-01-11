import React from "react";
import classnames from "classnames/bind";
import styles from "./app-layout.module.scss";

const cn = classnames.bind(styles);

export const AppLayout: React.FC = ({ children }) => {
  return <div className={styles.app}>{children}</div>;
};
