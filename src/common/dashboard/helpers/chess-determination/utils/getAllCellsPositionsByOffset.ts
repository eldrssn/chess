import { getNextCellPosition } from "./getNextCellPosition";
import { IGetAllCellsPositionsByOffset } from "./types";

export const getAllCellsPositionsByOffset = ({
  currentPosition,
  offsets,
}: IGetAllCellsPositionsByOffset) => {
  return offsets.map((offset) => {
    const [columnOffset, rowOffset] = offset;

    return getNextCellPosition({
      currentPosition,
      columnOffset,
      rowOffset,
    });
  });
};
