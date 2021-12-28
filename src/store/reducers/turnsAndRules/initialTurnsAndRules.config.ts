import { StateTurnsAndRulesProps, TURN } from "./types";

export const initialTurnsAndRules: StateTurnsAndRulesProps = {
  choosenPiece: null,
  fromCell: null,
  moveToCell: null,
  whoseTurn: TURN.WHITE,
};
