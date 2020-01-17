import { createReducer } from "@reduxjs/toolkit";
import { setConnecting, toggleExpand, onError, reset } from "./actions";

export const piSlice = {
  updated: Date.now(),
  baseUrl: `https://pi.listingslab.io/`,
  expanded: true,
  connected: false,
  connecting: false,
  error: false
};

const pi = createReducer(piSlice, {
  [setConnecting]: (state, action) => {
    // console.log("setConnecting", action.connecting);
    state.updated = Date.now();
    state.connecting = action.connecting;
    return state;
  },

  [onError]: (state, action) => {
    console.log("onError", action.error);
    state.updated = Date.now();
    state.error = action.error;
    return state;
  },

  [toggleExpand]: state => {
    state.updated = Date.now();
    state.expanded = !state.expanded;
    return state;
  },

  [reset]: () => {
    return piSlice;
  }
});

export { pi };
