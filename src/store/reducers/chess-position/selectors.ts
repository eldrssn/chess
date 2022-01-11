import { TSelect } from "types/store";
import { TChessState } from "./types";

export const selectChessPosition: TSelect<TChessState> = (state) =>
  state.chessPosition;
