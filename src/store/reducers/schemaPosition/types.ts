export enum types {
  setDefaultSchemaPosition = "SET_DEFAULT_SCHEMA_POSITION",
  updateSchemaPosition = "UPDATE_SCHEMA_POSITION",
}

export type StatePositionProps = {
  [key: string]: string;
};

interface ActionPositionProps {
  type: types;
  payload?: any;
}
export type ReducerPositionProps = (
  state: StatePositionProps,
  action: ActionPositionProps
) => StatePositionProps;

export type ActionHandlerProps = {
  SET_DEFAULT_SCHEMA_POSITION: ReducerPositionProps;
  UPDATE_SCHEMA_POSITION: ReducerPositionProps;
};
