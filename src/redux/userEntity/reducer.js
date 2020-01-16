import { createReducer } from "@reduxjs/toolkit";
import { reset, init } from "./actions";

export const userEntitySlice = {
  updated: Date.now(),
  data: {
    fingerprint: ``,
    flattented: `strings`
  },
  errors: []
};

const userEntity = createReducer(userEntitySlice, {
  [init]: (state, action) => {
    console.log("userEntity => init => ", action);
    state.updated = Date.now();
    return state;
  },

  [reset]: () => {
    return userEntitySlice;
  }
});

export { userEntity };
