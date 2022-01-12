import React from "react";
import classNames from "classnames/bind";

import { InfoBlockLayoutProps } from "./types";

import styles from "./info-block-layout.module.scss";

const cn = classNames.bind(styles);

export const InfoBlockLayout: React.FC<InfoBlockLayoutProps> = ({
  isCurrentTurn,
  children,
}) => {
  return (
    <section
      className={cn(styles.infoBlock, {
        [styles.infoBlockCurrentTurn]: isCurrentTurn,
      })}
    >
      {children}
    </section>
  );
};
