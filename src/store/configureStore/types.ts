import { store } from "./configureStore.dev";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
