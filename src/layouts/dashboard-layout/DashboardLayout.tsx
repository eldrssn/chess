import React from "react";
import styles from "./dashboard-layout.module.scss";

export const DashboardLayout: React.FC = ({ children }) => {
  return <main className={styles.dashboard}>{children}</main>;
};
