import { createReducer } from "@reduxjs/toolkit";
import { toggleExpand, reset } from "./actions";

export const piSlice = {
  updated: Date.now(),
  connected: false,
  connecting: false,
  expanded: true
};

const pi = createReducer(piSlice, {
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
