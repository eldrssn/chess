import { combineReducers } from "redux";
import { chessPositionReducer } from "./chess-position/chessPositionReducer";
import { currentMoveReducer } from "./current-move/currentMoveReducer";

export const rootReducer = combineReducers({
  chessPosition: chessPositionReducer,
  currentMove: currentMoveReducer,
});
