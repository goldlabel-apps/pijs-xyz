import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reduxBatch } from "@manaflair/redux-batch";
import { entityReducer } from "./entity/reducer";

const reduxStore = (entity) => {
  
  const reducer = combineReducers({
    entity: entityReducer
  });

  const preloadedState = {
    entity
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

export default reduxStore;
