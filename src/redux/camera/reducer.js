import { createReducer } from "@reduxjs/toolkit";
import { toggleExpand, pause, reset, update } from "./actions";

export const cameraSlice = {
  updated: Date.now(),
  expanded: false,
  playing: null,
  currentPhoto: `https://pi.listingslab.io/current-photo-BROKE?cb=${Date.now()}`
};

const camera = createReducer(cameraSlice, {
  //
  [update]: state => {
    console.log(`https://pi.listingslab.io/current-photo?cb=${Date.now()}`);
    // NEVER update the photo
    // state.updated = Date.now();
    // state.currentPhoto = `https://pi.listingslab.io/current-photo?cb=${Date.now()}`;
    return state;
  },

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
