import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reduxBatch } from "@manaflair/redux-batch";
import { entityReducer } from "./entity/reducer";
import { appReducer, appSlice } from "./app/reducer";

const reduxStore = (entity) => {
  
  const reducer = combineReducers({
    app: appReducer,
    entity: entityReducer
  });

  const preloadedState = {
    app: appSlice,
    entity,
  };

  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ];

  const store = configureStore({
    devTools: process.env.NODE_ENV !== "production",
    reducer,
    middleware,
    preloadedState,
    enhancers: [reduxBatch]
  });

  return store;
};

export default reduxStore;
