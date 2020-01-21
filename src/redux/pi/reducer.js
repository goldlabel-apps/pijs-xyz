import { createReducer } from "@reduxjs/toolkit";
import { setConnecting, toggleExpand, onError, reset, save } from "./actions";

export const piSlice = {
  updated: Date.now(),
  baseUrl: `https://pi.listingslab.io/`,
  timeout: 6000,
  expanded: false,
  connected: false,
  connecting: false,
  lastConnectSuccess: null,
  piEpoch: null,
  piTime: null,
  description: null,
  name: null,
  error: true,
  location: null,
  lat: null,
  lng: null
};

const pi = createReducer(piSlice, {
  //
  [save]: (state, action) => {
    state.updated = Date.now();
    state.error = false;
    state.connecting = false;
    state.connected = true;
    state.lastConnectSuccess = Date.now();
    state.piEpoch = action.data.piEpoch;
    state.piTime = action.data.piTime;
    state.firmwareVersion = action.data.firmwareVersion;
    state.description = action.data.description;
    state.name = action.data.name;
    state.location = action.data.location;
    state.lat = action.data.lat;
    state.lng = action.data.lng;
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
    return piSlice;
  }
});

export { pi };
