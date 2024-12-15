import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./slices/userSlice";
import videoSlice from "./slices/videoSlice";

const persistConfig = {
  key: "root",
  storage,
};

const appReducer = combineReducers({
  user: userSlice,
  video: videoSlice,
});

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: ["cart._persist"],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
