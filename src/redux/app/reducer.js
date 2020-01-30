import { createReducer } from "@reduxjs/toolkit";
import { reset } from "./actions";

export const appSlice = {
  clockwork: {
    tickDelay: 1,
    ticking: false,
    ticks: 0
  }
};

const appReducer = createReducer(appSlice, {
  [reset]: () => {
    return appSlice;
  }
});

export { appReducer };
