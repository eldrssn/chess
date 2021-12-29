import { StateTurnsAndRulesProps } from "types/store";
import { TURN } from "utils/constants";

export const initialTurnsAndRules: StateTurnsAndRulesProps = {
  choosenPiece: null,
  fromCell: null,
  moveToCell: null,
  whoseTurn: TURN.WHITE,
};
