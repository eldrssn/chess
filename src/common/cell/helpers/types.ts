import { COLOR } from "store/reducers/current-move/types";

export interface isChoosenCellProps {
  choosenCell: string;
  cell: string;
  piece: string;
  chessColor: COLOR;
}
