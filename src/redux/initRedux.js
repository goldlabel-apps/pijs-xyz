import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { reduxBatch } from "@manaflair/redux-batch";
import { clockwork, clockworkSlice } from "./clockwork/reducer";

const initRedux = () => {
  const persistConfig = {
    key: "pijs",
    storage
  };

  const reducers = combineReducers({
    clockwork
  });

  const persistedReducer = persistReducer(persistConfig, reducers);

  const preloadedState = {
    clockwork: clockworkSlice
  };

  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ];

  const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
    enhancers: [reduxBatch]
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export default initRedux;
