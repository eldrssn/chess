import { Action } from "redux";
import { IState } from "store/configure-store/types";

export interface ActionStore<Payload = Record<string, any>>
  extends Action<string> {
  payload?: Payload;
}

export type TSelect<T> = (state: IState) => T;

export interface IAction<T> {
  type: string;
  payload?: T;
}
