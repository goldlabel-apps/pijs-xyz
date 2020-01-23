import { createReducer } from "@reduxjs/toolkit";
import { init, start, pause, reset, tick } from "./actions";

export const clockworkSlice = {
  updated: Date.now(),
  started: Date.now(),
  ticks: 0,
  ticking: false,
  tickDelay: 1,
  secondsBetweenUpdates: 3,
  timeoutSecs: 5
};

const clockwork = createReducer(clockworkSlice, {
  [init]: state => {
    state.updated = Date.now();
    return state;
  },

  [tick]: state => {
    state.updated = Date.now();
    state.ticks++;
    return state;
  },

  [pause]: state => {
    state.updated = Date.now();
    state.ticking = false;
    return state;
  },

  [start]: state => {
    state.updated = Date.now();
    state.ticking = true;
    return state;
  },

  [reset]: () => {
    return clockworkSlice;
  }
});

export { clockwork };
