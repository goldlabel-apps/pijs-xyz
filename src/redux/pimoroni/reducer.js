import { createReducer } from "@reduxjs/toolkit";
import { setConnecting, toggleExpand, onError, reset, save } from "./actions";

export const pimoroniSlice = {
  updated: Date.now(),
  baseUrl: `https://pi.listingslab.io/pimoroni`,
  timeout: 6000,
  expanded: true,
  fetching: false,
  fetched: false,
  lastFetchSuccess: null,
  lux: null,
  pressure: null,
  temperature: null,
  lastPiUpdate: null
};

const pimoroni = createReducer(pimoroniSlice, {
  //
  [save]: (state, action) => {
    // console.log("save", action.data);
    state.updated = Date.now();
    state.lastFetchSuccess = Date.now();
    state.error = false;
    state.fetching = false;
    state.fetched = true;
    state.lux = action.data.lux;
    state.pressure = action.data.pressure;
    state.temperature = action.data.temperature;
    state.lastPiUpdate = action.data.updated;
    return state;
  },

  [setConnecting]: (state, action) => {
    state.updated = Date.now();
    state.connecting = action.connecting;
    return state;
  },

  [onError]: (state, action) => {
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
    return pimoroniSlice;
  }
});

export { pimoroni };
