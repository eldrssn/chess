import { rootReducer } from "store/reducers";
import { store } from "../../store/configureStore/configureStore.dev";

// !TODO: разобраться с правильной типизацией RootState, ошибка точно из-за этого
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
