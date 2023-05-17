import React from "react";
import { HeaderLayout } from "layouts/header-layout/HeaderLayout";

import styles from "./header.module.scss";
import { UsernameField } from "common/username-field";

export const Header: React.FC = () => (
    <HeaderLayout>
        <h1 className={styles.mainTitle}>Chess</h1>
        <UsernameField />
    </HeaderLayout>
);
