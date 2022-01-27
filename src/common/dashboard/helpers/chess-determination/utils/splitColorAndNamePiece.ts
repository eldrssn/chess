import { ISplitColorAndNamePiece } from "./types";

export const splitColorAndNamePiece = ({
  chessPosition,
  cell,
}: ISplitColorAndNamePiece) => {
  return chessPosition[cell] ? chessPosition[cell].split("_") : [];
};
