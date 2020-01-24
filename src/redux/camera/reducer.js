import { createReducer } from "@reduxjs/toolkit";
import { reset, update, loaded, error } from "./actions";

export const cameraSlice = {
  updated: Date.now(),
  running: true,
  error: false,
  lastSuccessfulLoad: null,
  currentPhoto: `https://pi.listingslab.io/current-photo?cb=${Date.now()}`
};

const camera = createReducer(cameraSlice, {
  //
  [loaded]: state => {
    state.updated = Date.now();
    state.lastSuccessfulLoad = Date.now();
    state.error = false;
    state.running = true;
    return state;
  },

  [error]: state => {
    state.updated = Date.now();
    state.error = true;
    state.running = false;
    return state;
  },

  [update]: state => {
    state.updated = Date.now();
    state.currentPhoto = `https://pi.listingslab.io/current-photo?cb=${Date.now()}`;
    state.error = false;
    return state;
  },

  [reset]: () => {
    return cameraSlice;
  }
});

export { camera };
