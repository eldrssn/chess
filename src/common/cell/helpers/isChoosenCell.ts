import { isChoosenCellProps } from "./types";

export const isChoosenCell = ({ choosenCell, cell }: isChoosenCellProps) =>
  choosenCell === cell;
