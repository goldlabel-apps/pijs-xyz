import { createReducer } from "@reduxjs/toolkit";
import {
  connectionDialog,
  reset,
  restart,
  update,
  loaded,
  error,
  toggleEffectMenu,
  toggleUserEntity
} from "./actions";

export const systemSlice = {
  updated: Date.now(),
  error: false,
  connectionOpen: false,
  effectsMenuOpen: false,
  userEntityOpen: false
};

const system = createReducer(systemSlice, {
  [toggleUserEntity]: (state, action) => {
    state.updated = Date.now();
    state.userEntityOpen = action.open;
    return state;
  },
  [toggleEffectMenu]: (state, action) => {
    // console.log("[toggleEffectMenu]");
    state.updated = Date.now();
    state.effectsMenuOpen = action.open;
    return state;
  },

  [connectionDialog]: (state, action) => {
    // console.log("[connectionDialog]");
    state.updated = Date.now();
    state.connectionOpen = action.open;
    return state;
  },
  [restart]: state => {
    // console.log("[restart]");
    state.updated = Date.now();
    return state;
  },
  [loaded]: state => {
    state.updated = Date.now();
    return state;
  },

  [error]: state => {
    state.error = true;
    return state;
  },

  [update]: state => {
    state.updated = Date.now();
    return state;
  },

  [reset]: () => {
    return systemSlice;
  }
});

export { system };
