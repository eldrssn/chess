import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "types/store/globalStore";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
