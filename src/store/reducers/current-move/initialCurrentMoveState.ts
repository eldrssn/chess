import { ICurrentMoveState, CHESS_COLORS } from "./types";

export const initialCurrentMoveState: ICurrentMoveState = {
  choosenPiece: null,
  fromCell: null,
  moveToCell: null,
  chessColor: CHESS_COLORS.WHITE,
  captureByBlack: [],
  captureByWhite: [],
};
