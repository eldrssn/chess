import { IAction } from "types/store";

export enum typesChessPosition {
  SET_DEFAULT_CHESS_POSITION = "SET_DEFAULT_CHESS_POSITION",
  UPDATE_CHESS_POSITION = "UPDATE_CHESS_POSITION",
}

export type TChessState = Record<string, string | null>;

export interface IChessDefaultAction {
  type: string;
}

export type TUpdateChessPositionPayload = {
  choosenPieceType: string;
  fromCellPosition: string;
  toCellPosition: string;
};

export type TUpdateChessPositionAction = IAction<TUpdateChessPositionPayload>;

export type TChessAction = IChessDefaultAction | TUpdateChessPositionAction;
