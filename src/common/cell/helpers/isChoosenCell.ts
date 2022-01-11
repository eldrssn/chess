import { isChoosenCellProps } from "types/common/cell/helpers";

export const isChoosenCell = ({ choosenCell, cell }: isChoosenCellProps) =>
  choosenCell === cell;
