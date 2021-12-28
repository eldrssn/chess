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

export type ActionTurnsAndRulesProps = {
  type: types;
  payload?: any;
};

export type ReducerTurnsAndRulesProps = (
  state: StateTurnsAndRulesProps,
  action: ActionTurnsAndRulesProps
) => StateTurnsAndRulesProps;

export type ActionHandlerProps = {
  SET_CHOOSEN_PIECE: ReducerTurnsAndRulesProps;
};

export interface PayloadTurnsAndRulesProps {
  choosenPiece?: null | string;
  fromCell?: null | string;
  moveToCell?: null | string;
  whoseTurn?: TURN;
}

export type setChoosenPieceProps = (payload: PayloadTurnsAndRulesProps) => {
  type: types.setChoosenPiece;
  payload: PayloadTurnsAndRulesProps;
};
