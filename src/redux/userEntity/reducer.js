import { createReducer } from "@reduxjs/toolkit";
import { reset } from "./actions";

export const userEntitySlice = {
  updated: Date.now(),
  data: {
    fingerprint: ``,
    flattented: `strings`
  },
  errors: []
};

const userEntity = createReducer(userEntitySlice, {
  [reset]: () => {
    return userEntitySlice;
  }
});

export { userEntity };
