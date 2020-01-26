import { createReducer } from "@reduxjs/toolkit";
import { reset, update, loaded, error, effect } from "./actions";
export const cameraSlice = {
  updated: Date.now(),
  running: true,
  error: false,
  lastSuccessfulLoad: null,
  currentPhoto: `https://pi.listingslab.io/current-photo?cb=${Date.now()}`,
  effect: {
    label: `None`,
    slug: `none`,
    description: `No effect selected`
  }
};

const camera = createReducer(cameraSlice, {
  [effect]: (state, action) => {
    state.updated = Date.now();
    state.effect = action.effect;
    return state;
  },

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

  [update]: (state, action) => {
    state.updated = Date.now();
    state.effect = action.effect;
    let effectEndpoint = `/`;
    if (action.effect.slug !== "none") {
      effectEndpoint += `${action.effect.slug}/`;
    }
    state.currentPhoto = `https://pi.listingslab.io/current-photo${effectEndpoint}?cb=${Date.now()}`;
    state.error = false;
    return state;
  },

  [reset]: () => {
    return cameraSlice;
  }
});

export { camera };
