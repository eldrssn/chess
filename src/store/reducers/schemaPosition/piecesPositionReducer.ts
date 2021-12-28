import { initialPositionState } from "store/reducers/schemaPosition/initialPositionState.config";
import { ActionHandlerProps, ReducerPositionProps, types } from "./types";

// редьюсер, который отрисовывает фигуры на доске
const ACTION_HANDLERS: ActionHandlerProps = {
  [types.setDefaultSchemaPosition]: (state, action) => {
    return state;
  },
  [types.updateSchemaPosition]: (state, action) => {
    return state;
  },
};

export const piecesPosition: ReducerPositionProps = (
  state = initialPositionState,
  action
) => {
  return ACTION_HANDLERS[action.type]
    ? ACTION_HANDLERS[action.type](state, action)
    : state;
};
