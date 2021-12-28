import { rootReducer } from "store/reducers";
import { store } from "./configureStore.dev";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
