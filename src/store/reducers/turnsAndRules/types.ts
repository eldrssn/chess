export enum types {
  setChoosenPiece = "SET_CHOOSEN_PIECE",
}

export enum TURN {
  WHITE = "white",
  BLACK = "black",
}

export type StateProps = {
  choosenPiece?: null | string;
  fromCell?: null | string;
  moveToCell?: null | string;
  whoseTurn?: TURN;
};

export interface TurnsAndRulesProps {
  choosenPiece: null | string;
  fromCell: null | string;
  moveToCell: null | string;
  whoseTurn: TURN;
}

export type ActionProps = {
  type: types;
  payload: StateProps;
};
