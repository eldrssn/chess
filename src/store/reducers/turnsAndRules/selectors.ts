import { RootState } from "store/configureStore/types";

export const selectTurnsAndRules = (state: RootState) => state.turnsAndRules;
