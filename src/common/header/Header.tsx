import React from "react";
import { HeaderLayout } from "layouts/header-layout/HeaderLayout";

import styles from "./header.module.scss";
import { UsernameField } from "common/username-field";

export const Header: React.FC = () => {
  return (
    <HeaderLayout>
      <h1 className={styles.mainTitle}>Шахматы</h1>
      <UsernameField />
    </HeaderLayout>
  );
};
