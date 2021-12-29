import { typesOfSchemaPosition } from "types/store";

export const setDefaultSchemaPosition = (payload) => {
  return {
    type: typesOfSchemaPosition.setDefaultSchemaPosition,
    payload: null
  };
};
