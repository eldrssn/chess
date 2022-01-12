import { isChoosenCellProps } from "types/common/cell/helpers";

export const isChoosenCell = ({
  choosenCell,
  cell,
  piece,
  chessColor,
}: isChoosenCellProps) => {
  console.log(piece);

  if (typeof piece === "string") {
    return (
      choosenCell === cell &&
      !!piece &&
      piece.includes(chessColor.toLowerCase())
    );
  }
};
//
