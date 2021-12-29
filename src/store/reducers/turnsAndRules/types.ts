import { Reducer, Action } from "redux";

export enum types {
  setChoosenPiece = "SET_CHOOSEN_PIECE",
}

export enum TURN {
  WHITE = "white",
  BLACK = "black",
}

export interface StateTurnsAndRulesProps {
  choosenPiece: null | string;
  fromCell: null | string;
  moveToCell: null | string;
  whoseTurn: TURN;
}

export interface PayloadSetChoosenPieceProps {
  choosenPiece: null | string;
  fromCell: null | string;
}

export interface ActionTurnsAndRulesProps extends Action<typeof types.setChoosenPiece> {
  payload: PayloadSetChoosenPieceProps;
};

export type ActionHandlerProps = {
  SET_CHOOSEN_PIECE: Reducer<StateTurnsAndRulesProps>;
};

