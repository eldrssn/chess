import { typesOfTurnAndRules } from "types/store";

export const setChoosenPiece = (payload) => {
  return {
    type: typesOfTurnAndRules.setChoosenPiece,
    payload,
  };
};
