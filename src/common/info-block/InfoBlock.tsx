import React, { FC } from "react";

import { InfoBlockLayout } from "layouts/info-block-layout/InfoBlockLayout";

import { InfoBlockProps } from "./types";

export const InfoBlock: FC<InfoBlockProps> = ({ isCurrentTurn }) => {
  return (
    <InfoBlockLayout isCurrentTurn={isCurrentTurn}>
      <p>тут чей ход</p>
      <div>тут сбитые шахматы</div>
    </InfoBlockLayout>
  );
};
