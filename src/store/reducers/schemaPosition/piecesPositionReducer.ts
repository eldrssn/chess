import { Reducer } from "redux";

import { initialPositionState } from "store/reducers/schemaPosition/initialPositionState.config";
import { ActionHandlerSchemaPositionProps, ActionPositionProps, StatePositionProps, typesOfSchemaPosition } from "types/store";


const ACTION_HANDLERS: ActionHandlerSchemaPositionProps = {
  [typesOfSchemaPosition.setDefaultSchemaPosition]: (state, action) => {
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
