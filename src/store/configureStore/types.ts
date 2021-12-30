import { StatePositionProps } from "store/reducers/schemaPosition/types";
import { TurnsAndRulesState } from "store/reducers/turnsAndRules/types";

export type ActionType<Payload = Record<string, any>> = {
  type: string;
  payload?: Payload;
};

export type ReduxState = {
  piecesPosition: StatePositionProps;
  turnsAndRules: TurnsAndRulesState;
};
