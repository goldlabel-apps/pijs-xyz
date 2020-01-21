import { createReducer } from "@reduxjs/toolkit";
import { reset } from "./actions";

export const firebaseSlice = {
  updated: Date.now()
};

const firebase = createReducer(firebaseSlice, {
  //
  [reset]: () => {
    return firebaseSlice;
  }
});

export { firebase };
