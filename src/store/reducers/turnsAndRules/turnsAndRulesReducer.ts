import { initialTurnsAndRules } from "store/reducers/turnsAndRules/initialTurnsAndRules.config";
import { ActionProps, StateProps, types } from "./types";

// редьюсер, который будет отвечать за то, чей ход, какая фигура куда переместилась итд
const ACTION_HANDLERS = {
  [types.setChoosenPiece]: (state: StateProps, action: ActionProps) => {
    console.log(state);
    return { ...state, ...action.payload };
  },
};

export const turnsAndRules = (
  state: StateProps = initialTurnsAndRules,
  action: ActionProps
) => {
  return ACTION_HANDLERS[action.type]
    ? ACTION_HANDLERS[action.type](state, action)
    : state;
};
