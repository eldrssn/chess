import { Reducer } from "redux";

import { ActionStore } from "types/store";

import { initialTurnsAndRules } from "./initialTurnsAndRules.config";
import {
  ActionHandlerProps,
  types,
  TurnsAndRulesState,
  PayloadTurnsAndRulesProps,
} from "./types";

// редьюсер, который будет отвечать за то, чей ход, какая фигура куда переместилась итд
const ACTION_HANDLERS: ActionHandlerProps = {
  [types.setChoosenPiece]: (
    state,
    action: ActionStore<PayloadTurnsAndRulesProps>
  ) => {
    console.log(state);

    if (action.payload) {
      const newState = {
        ...state,
        //     ...action.payload,
      };

      return newState;
    }

    return state;
  },
};

export const turnsAndRules: Reducer<TurnsAndRulesState, ActionStore> = (
  state = initialTurnsAndRules,
  action
) => {
  return ACTION_HANDLERS[action.type]
    ? ACTION_HANDLERS[action.type](state, action)
    : state;
};
