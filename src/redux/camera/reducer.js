import { createReducer } from "@reduxjs/toolkit";
import { toggleExpand, pause, reset } from "./actions";

export const cameraSlice = {
  updated: Date.now(),
  playing: null,
  expanded: true
};

const camera = createReducer(cameraSlice, {
  [toggleExpand]: state => {
    state.updated = Date.now();
    state.expanded = !state.expanded;
    return state;
  },

  [pause]: state => {
    state.updated = Date.now();
    state.playing = false;
    return state;
  },

  [reset]: () => {
    return cameraSlice;
  }
});

export { camera };
