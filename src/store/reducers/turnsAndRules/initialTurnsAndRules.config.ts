import { TurnsAndRulesState, TURN } from "./types";

export const initialTurnsAndRules: TurnsAndRulesState = {
  choosenPiece: null,
  fromCell: null,
  moveToCell: null,
  whoseTurn: TURN.WHITE,
};
