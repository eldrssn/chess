import { Reducer } from "react";
import { combineReducers } from "redux";

import { piecesPosition } from "./schemaPosition/piecesPositionReducer";
import { turnsAndRules } from "./turnsAndRules/turnsAndRulesReducer";

import { RootReducerProps } from "./types";

export const rootReducer = combineReducers<RootReducerProps>({
  piecesPosition,
  turnsAndRules,
});
