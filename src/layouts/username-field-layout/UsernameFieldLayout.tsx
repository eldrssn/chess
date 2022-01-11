import React from "react";
import styles from "./username-field-layout.module.scss";

export const UsernameFieldLayout: React.FC = ({ children }) => {
  return <article className={styles.usernameField}>{children}</article>;
};
