import { combineReducers } from "redux";

import { piecesPosition } from "./schemaPosition/piecesPositionReducer";
import { turnsAndRules } from "./turnsAndRules/turnsAndRulesReducer";

export const rootReducer = combineReducers({
  piecesPosition,
  turnsAndRules,
});
