import { ICurrentMoveState, CHESS_COLORS } from "./types";

export const initialCurrentMoveState: ICurrentMoveState = {
  choosenPieceType: null,
  fromCellPosition: null,
  toCellPosition: null,
  chessPlayerColor: CHESS_COLORS.WHITE,
  piecesCaptureByBlackChess: [],
  piecesCaptureByWhiteChess: [],
};
