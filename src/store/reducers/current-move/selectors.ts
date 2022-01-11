import { TSelect } from "types/store";
import { ICurrentMoveState } from "./types";

export const selectCurrentMove: TSelect<ICurrentMoveState> = (state) =>
  state.currentMove;
