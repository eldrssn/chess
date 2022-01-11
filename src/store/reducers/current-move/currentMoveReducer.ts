import { Reducer } from "redux";

import { IAction } from "types/store";
import { initialCurrentMoveState } from "./initialCurrentMoveState";
import {
  CHESS_COLORS,
  ICurrentMoveState,
  TCapturePiecePayload,
  TCurrentMoveActions,
  TSetChoosenPiecePayload,
  typesCurrentMove,
} from "./types";

const ACTION_HANDLERS = {
  [typesCurrentMove.SET_CHOOSEN_PIECE]: (
    state: ICurrentMoveState,
    action: IAction<TSetChoosenPiecePayload>
  ) => {
    return action.payload
      ? {
          ...state,
          ...action.payload,
        }
      : state;
  },

  [typesCurrentMove.CHANGE_TURN]: (
    state: ICurrentMoveState,
    action: IAction<never>
  ) => {
    return state.chessColor === CHESS_COLORS.WHITE
      ? { ...state, chessColor: CHESS_COLORS.BLACK, choosenPiece: null }
      : { ...state, chessColor: CHESS_COLORS.WHITE, choosenPiece: null };
  },

  [typesCurrentMove.CAPTURE_PIECE]: (
    state: ICurrentMoveState,
    action: IAction<TCapturePiecePayload>
  ) => {
    const piece = action.payload;

    return state.chessColor === CHESS_COLORS.WHITE
      ? { ...state, captureByWhite: [...state.captureByWhite, piece] }
      : { ...state, captureByBlack: [...state.captureByBlack, piece] };
  },
};

export const currentMoveReducer: Reducer<
  ICurrentMoveState,
  TCurrentMoveActions
> = (state = initialCurrentMoveState, action) => {
  return ACTION_HANDLERS[action.type]
    ? ACTION_HANDLERS[action.type](state, action)
    : state;
};
