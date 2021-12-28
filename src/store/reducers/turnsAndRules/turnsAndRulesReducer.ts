import { Reducer } from "redux";
import { initialTurnsAndRules } from "store/reducers/turnsAndRules/initialTurnsAndRules.config";
import {
  ActionHandlerProps,
  ActionTurnsAndRulesProps,
  StateTurnsAndRulesProps,
  types,
} from "./types";

// редьюсер, который будет отвечать за то, чей ход, какая фигура куда переместилась итд
const ACTION_HANDLERS: ActionHandlerProps = {
  [types.setChoosenPiece]: (state, action) => {
    console.log(state);
    return { ...state, ...action.payload };
  },
};

export const turnsAndRules: Reducer<
  StateTurnsAndRulesProps,
  ActionTurnsAndRulesProps
> = (state = initialTurnsAndRules, action) => {
  return ACTION_HANDLERS[action.type]
    ? ACTION_HANDLERS[action.type](state, action)
    : state;
};
