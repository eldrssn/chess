import { Reducer, Action } from "redux";
import { TURN } from "utils/constants";

export enum typesOfTurnAndRules {
  setChoosenPiece = "SET_CHOOSEN_PIECE",
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

export interface ActionTurnsAndRulesProps extends Action<typeof typesOfTurnAndRules.setChoosenPiece> {
  payload: PayloadSetChoosenPieceProps;
};

export type ActionHandlerTurnsAndRulesProps = {
  SET_CHOOSEN_PIECE: Reducer<StateTurnsAndRulesProps>;
};

