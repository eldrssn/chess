import { Reducer } from "redux";
import { ActionStore } from "types/store";

export enum types {
  setChoosenPiece = "SET_CHOOSEN_PIECE",
}

export enum TURN {
  WHITE = "WHITE",
  BLACK = "BLACK",
}

export type TurnType = keyof typeof TURN;

export interface TurnsAndRulesState {
  choosenPiece: null | string;
  fromCell: null | string;
  moveToCell: null | string;
  whoseTurn: TurnType;
}

export type ActionTurnsAndRulesProps = {
  type: types;
  payload?: any;
};

export type ActionHandlerProps = Record<
  string,
  Reducer<TurnsAndRulesState, ActionStore>
>;

export interface PayloadTurnsAndRulesProps {
  choosenPiece?: null | string;
  fromCell?: null | string;
  moveToCell?: null | string;
  whoseTurn?: TurnType;
}

export type setChoosenPieceProps = (payload: PayloadTurnsAndRulesProps) => {
  type: types.setChoosenPiece;
  payload: PayloadTurnsAndRulesProps;
};
