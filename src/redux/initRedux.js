import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { reduxBatch } from "@manaflair/redux-batch";
import { advert, advertSlice } from "./advert/reducer";
import { camera, cameraSlice } from "./camera/reducer";
import { clockwork, clockworkSlice } from "./clockwork/reducer";
import { pi, piSlice } from "./pi/reducer";
import { userEntity, userEntitySlice } from "./userEntity/reducer";

const initRedux = () => {
  const persistConfig = {
    key: "pijs",
    storage
  };

  const reducers = combineReducers({
    advert,
    camera,
    clockwork,
    pi,
    userEntity
  });

  const persistedReducer = persistReducer(persistConfig, reducers);

  const preloadedState = {
    advert: advertSlice,
    camera: cameraSlice,
    clockwork: clockworkSlice,
    pi: piSlice,
    userEntity: userEntitySlice
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
