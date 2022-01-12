import { Reducer } from "redux";

export enum typesOfSchemaPosition {
  setDefaultSchemaPosition = "SET_DEFAULT_SCHEMA_POSITION",
  updateSchemaPosition = "UPDATE_SCHEMA_POSITION",
}

export type StatePositionProps = {
  [key: string]: string;
};

export interface ActionSetDefaultPositionProps {
  type: typesOfSchemaPosition.setDefaultSchemaPosition,
}

export type ActionPositionProps = ActionSetDefaultPositionProps; 

export type ActionHandlerSchemaPositionProps = {
  SET_DEFAULT_SCHEMA_POSITION: Reducer<StatePositionProps>;
};
