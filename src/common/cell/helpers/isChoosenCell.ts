import { isChoosenCellProps } from "./types";

export const isChoosenCell = ({
  choosenCell,
  cell,
  piece,
  chessColor,
}: isChoosenCellProps) => {
  if (typeof piece === "string") {
    return (
      choosenCell === cell &&
      !!piece &&
      piece.includes(chessColor.toLowerCase())
    );
  }
};
