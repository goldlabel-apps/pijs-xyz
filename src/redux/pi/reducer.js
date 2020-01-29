import { createReducer } from "@reduxjs/toolkit";
import { fetching, error, reset, save } from "./actions";

export const piSlice = {
  updated: Date.now(),
  baseUrl: `https://pi.listingslab.io/`,
  timeout: 5000,
  fetched: false,
  fetching: false,
  lastConnectSuccess: null,
  data: null,
};

const pi = createReducer(piSlice, {
  //
  [save]: (state, action) => {
    state.updated = Date.now();
    state.error = false;
    state.fetching = false;
    state.fetched = true;
    state.lastConnectSuccess = Date.now();
    state.data = action.pi
    delete(state.data.endpoints)
    return state;
  },

  [fetching]: (state, action) => {
    state.updated = Date.now();
    state.connecting = action.connecting;
    return state;
  },

  [error]: (state, action) => {
    state.updated = Date.now();
    state.lastConnectSuccess = null;
    state.error = action.error;
    return state;
  },

  [reset]: () => {
    return piSlice;
  }
});

export { pi };
