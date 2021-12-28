import React from "react";
import { Header } from "../../common/header";
import styles from "./enter-page.module.scss";

export const EnterPage = () => {
  return (
    <div>
      <Header />
      <form className={styles.form}>
        <label className={styles["form-decription"]} htmlFor="name">
          Ваше имя?
        </label>
        <input className={styles["form-decription"]} id="name" type="text" />
        <button className={styles["form-button"]} type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};
