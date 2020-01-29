import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reduxBatch } from "@manaflair/redux-batch";
import { entity } from "./entity/reducer";

const entitySlice = {};

const initRedux = () => {
  const reducer = combineReducers({
    entity
  });

  const preloadedState = {
    entity: entitySlice
  };

  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ];

  const store = configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
    enhancers: [reduxBatch]
  });

  return store;
};

export default initRedux;
