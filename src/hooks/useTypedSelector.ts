import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IState } from "store/configure-store/types";

export const useTypedSelector: TypedUseSelectorHook<IState> = useSelector;
