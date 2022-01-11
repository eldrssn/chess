import {
  IChessDefaultAction,
  TUpdateChessPositionAction,
  TUpdateChessPositionPayload,
  typesChessPosition,
} from "./types";

export const setDefaultChessPosition = (): IChessDefaultAction => {
  return {
    type: typesChessPosition.SET_DEFAULT_CHESS_POSITION,
  };
};

export const updateChessPosition = (
  payload: TUpdateChessPositionPayload
): TUpdateChessPositionAction => {
  return {
    type: typesChessPosition.UPDATE_CHESS_POSITION,
    payload,
  };
};
