import { getNextCellPosition } from "./getNextCellPosition";

export const getAllCellsPositionsByOffset = (
  currentPosition: string,
  offsets: number[][]
) => {
  return offsets.map((offset) => {
    const [columnOffset, rowOffset] = offset;

    return getNextCellPosition({
      currentPosition,
      columnOffset,
      rowOffset,
    });
  });
};
