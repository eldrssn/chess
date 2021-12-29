// import { rootReducer } from "store/reducers";
import { piecesPosition } from "store/reducers/schemaPosition/piecesPositionReducer";
import { store } from "./configureStore.dev";

export type RootState = ReturnType<typeof piecesPosition>;
export type AppDispatch = typeof store.dispatch;
