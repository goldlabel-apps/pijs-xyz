import { createReducer } from "@reduxjs/toolkit";
import { reset } from "./actions";

export const appSlice = {};

const appReducer = createReducer(appSlice, {
  [reset]: () => {
    return appSlice;
  }
});

export { appReducer };
