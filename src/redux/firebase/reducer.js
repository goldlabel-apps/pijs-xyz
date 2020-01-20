import { createReducer } from "@reduxjs/toolkit";
import { anAction, reset } from "./actions";

export const firebaseSlice = {
  updated: Date.now()
};

const firebase = createReducer(firebaseSlice, {
  //
  [anAction]: state => {
    state.updated = Date.now();
    return state;
  },

  [reset]: () => {
    return firebaseSlice;
  }
});

export { firebase };
