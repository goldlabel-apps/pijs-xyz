import { createReducer } from "@reduxjs/toolkit";
import { start, pause, reset, tick } from "./actions";

export const clockworkSlice = {
  updated: Date.now(),
  data: {
    ticks: 0,
    ticking: false,
    tickDelay: 1 // secs betweek ticks
  },
  errors: []
};

const clockwork = createReducer(clockworkSlice, {
  [tick]: state => {
    state.updated = Date.now();
    state.data.ticks++;
    return state;
  },

  [pause]: state => {
    state.updated = Date.now();
    state.data.ticking = false;
    return state;
  },

  [start]: state => {
    state.updated = Date.now();
    state.data.ticking = true;
    return state;
  },

  [reset]: () => {
    return clockworkSlice;
  }
});

export { clockwork };
