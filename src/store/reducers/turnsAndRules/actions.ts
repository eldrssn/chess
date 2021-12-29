import { types } from "./types";

export const setChoosenPiece = (payload) => {
  return {
    type: types.setChoosenPiece,
    payload,
  };
};
