import { TChessState } from "store/reducers/chess-position/types";
import { ICurrentMoveState } from "store/reducers/current-move/types";

export type IState = {
  chessPosition: TChessState;
  currentMove: ICurrentMoveState;
};
