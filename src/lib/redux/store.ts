import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storageSession from "redux-persist/lib/storage/session";
import { userSlice } from "./slices";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const userReducer = persistReducer(persistConfig, userSlice.reducer);

export const reduxStore = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
export type Store = typeof reduxStore;
export const persistor = persistStore(reduxStore);
