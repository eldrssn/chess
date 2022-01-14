import { Reducer } from "redux";
import { initialStateChessPosition } from "./initialStateChessPosition";
import {
  IChessDefaultAction,
  TChessAction,
  TChessState,
  TUpdateChessPositionAction,
  typesChessPosition,
} from "./types";

const ACTION_HANDLERS = {
  [typesChessPosition.SET_DEFAULT_CHESS_POSITION]: (
    state: TChessState,
    action: IChessDefaultAction
  ) => {
    return { ...state };
  },

  [typesChessPosition.UPDATE_CHESS_POSITION]: (
    state: TChessState,
    action: TUpdateChessPositionAction
  ) => {
    const { choosenPieceType, fromCellPosition, toCellPosition } =
      action.payload;

    return {
      ...state,
      [fromCellPosition]: null,
      [toCellPosition]: choosenPieceType,
    };
  },
};

export const chessPositionReducer: Reducer<TChessState, TChessAction> = (
  state = initialStateChessPosition,
  action
) => {
  return ACTION_HANDLERS[action.type]
    ? ACTION_HANDLERS[action.type](state, action)
    : state;
};
