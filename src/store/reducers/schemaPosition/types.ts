import { Reducer } from "redux";

export enum types {
  setDefaultSchemaPosition = "SET_DEFAULT_SCHEMA_POSITION",
  updateSchemaPosition = "UPDATE_SCHEMA_POSITION",
}

export type StatePositionProps = {
  [key: string]: string;
};

export interface ActionSetDefaultPositionProps {
  type: types.setDefaultSchemaPosition,
}

export type ActionPositionProps = ActionSetDefaultPositionProps; 

export type ActionHandlerProps = {
  SET_DEFAULT_SCHEMA_POSITION: Reducer<StatePositionProps>;
};
