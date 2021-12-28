import { StateProps, types } from "./types";

export type setChoosenPieceProps = (payload: StateProps) => {
  type: types.setChoosenPiece;
  payload: StateProps;
};

export const setChoosenPiece: setChoosenPieceProps = (payload) => {
  return {
    type: types.setChoosenPiece,
    payload,
  };
};
