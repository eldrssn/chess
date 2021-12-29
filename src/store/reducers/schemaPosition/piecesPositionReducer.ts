import { Reducer } from "redux";
import { initialPositionState } from "store/reducers/schemaPosition/initialPositionState.config";
import {
  ActionHandlerProps,
  ActionPositionProps,
  StatePositionProps,
  types,
} from "./types";

const ACTION_HANDLERS: ActionHandlerProps = {
  [types.setDefaultSchemaPosition]: (state, action) => {
    console.log(action.type);
    
    return { ...state };
  },
};

export const piecesPosition: Reducer<StatePositionProps, ActionPositionProps> =
  (state = initialPositionState, action) => {
    return ACTION_HANDLERS[action.type]
      ? ACTION_HANDLERS[action.type](state, action)
      : state;
  };
