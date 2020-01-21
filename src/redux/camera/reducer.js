import { createReducer } from "@reduxjs/toolkit";
import { toggleExpand, reset, update, error } from "./actions";

export const cameraSlice = {
  updated: Date.now(),
  expanded: true,
  error: false,
  currentPhoto: `https://pi.listingslab.io/current-photo?cb=${Date.now()}`
};

const camera = createReducer(cameraSlice, {
  //
  [error]: (state, action) => {
    state.updated = Date.now();
    state.error = action.error;
    return state;
  },

  [update]: state => {
    state.updated = Date.now();
    state.currentPhoto = `https://pi.listingslab.io/current-photo?cb=${Date.now()}`;
    state.error = false;
    return state;
  },

  [toggleExpand]: state => {
    state.updated = Date.now();
    state.expanded = !state.expanded;
    return state;
  },

  [reset]: () => {
    return cameraSlice;
  }
});

export { camera };
