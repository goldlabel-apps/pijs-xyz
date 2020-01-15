import { createReducer } from "@reduxjs/toolkit";
import {
  animate,
  reset,
} from "./actions";

export const animationSlice = {
  updated: Date.now(),
  intro: {
    started: false,
    finished: false,
  }
};

const animation = createReducer(animationSlice, {

  [animate]: (state) => {
    state.updated = Date.now();
    return state;
  },

  [reset]: () => {
    return animationSlice;
  }, 

});

export { animation };
