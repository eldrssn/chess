import { IGetCellPosition } from "./types";

export const getCellPosition = ({ char, number }: IGetCellPosition) => {
  if (char && number) {
    return `${char}${number}`;
  }
};
