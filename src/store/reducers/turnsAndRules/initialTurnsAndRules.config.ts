import { StateProps, TURN } from "./types";

export const initialTurnsAndRules: StateProps = {
  choosenPiece: null,
  fromCell: null,
  moveToCell: null,
  whoseTurn: TURN.WHITE,
};
