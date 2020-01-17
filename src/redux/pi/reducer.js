import { createReducer } from "@reduxjs/toolkit";
import { setConnecting, toggleExpand, onError, reset, save } from "./actions";

export const piSlice = {
  updated: Date.now(),
  baseUrl: `https://pi.listingslab.io/`,
  timeout: 6000,
  expanded: true,
  connected: false,
  connecting: false,
  lastConnectSuccess: null,
  error: false,
  version: false
};

const pi = createReducer(piSlice, {
  //
  [save]: (state, action) => {
    // console.log("save", action.data);
    state.updated = Date.now();
    state.error = false;
    state.connecting = false;
    state.connected = true;
    state.lastConnectSuccess = Date.now();
    state.version = action.data.version;
    state.description = action.data.description;
    return state;
  },

  [setConnecting]: (state, action) => {
    // console.log("setConnecting", action.connecting);
    state.updated = Date.now();
    state.connecting = action.connecting;
    return state;
  },

  [onError]: (state, action) => {
    // console.log("onError", action.error);
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
