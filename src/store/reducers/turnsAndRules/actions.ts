import { setChoosenPieceProps, types } from "./types";

export const setChoosenPiece: setChoosenPieceProps = (payload) => {
  return {
    type: types.setChoosenPiece,
    payload,
  };
};
