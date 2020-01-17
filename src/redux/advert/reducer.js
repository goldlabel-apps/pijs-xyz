import { createReducer } from "@reduxjs/toolkit";
import { play, pause, reset, onComplete, start } from "./actions";

export const advertSlice = {
  updated: Date.now(),
  playing: false,
  started: false,
  complete: false
};

const advert = createReducer(advertSlice, {
  [start]: state => {
    state.updated = Date.now();
    state.started = true;
    return state;
  },

  [play]: state => {
    state.updated = Date.now();
    state.playing = true;
    return state;
  },

  [onComplete]: state => {
    state.updated = Date.now();
    state.complete = true;
    state.playing = false;
    return state;
  },

  [pause]: state => {
    state.updated = Date.now();
    state.playing = false;
    return state;
  },

  [reset]: () => {
    return advertSlice;
  }
});

export { advert };
