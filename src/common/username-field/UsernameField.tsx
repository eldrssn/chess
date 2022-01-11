import React from "react";

import { UsernameFieldLayout } from "layouts/username-field-layout";

import styles from "./username-field.module.scss";

export const UsernameField = () => {
  return (
    <UsernameFieldLayout>
      <img
        className={styles.icon}
        src="assets/imgs/user-icon.jpeg"
        width={30}
        height={30}
        alt="username icon"
      />
      <p className={styles.username}>User Name</p>
    </UsernameFieldLayout>
  );
};
