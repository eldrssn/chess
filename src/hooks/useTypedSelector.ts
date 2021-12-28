import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "store/configureStore/types";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
