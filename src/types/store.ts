import { Action } from "redux";

export interface ActionStore<Payload = Record<string, any>>
  extends Action<string> {
  payload?: Payload;
}
