import { createReducer } from "@reduxjs/toolkit";
import { init, start, pause, reset, tick } from "./actions";

export const clockworkSlice = {
  updated: Date.now(),
  ticks: 0,
  ticking: false,
  tickDelay: 1, // secs betweek ticks
  asyncInit: false,
  asyncInitting: false
};

const clockwork = createReducer(clockworkSlice, {
  [init]: state => {
    console.log("clockwork => CLOCKWORK/ASYNCINIT");
    state.updated = Date.now();
    state.asyncInitting = true;
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
