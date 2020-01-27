import { createReducer } from "@reduxjs/toolkit";
import uuidv1 from "uuid/v1";
import {
  firstRun,
  reset,
  prepare,
  checking,
  fingerprint,
  locating,
  location,
  userAgent
} from "./actions";
import { avatars } from "./fire"

export const firebaseSlice = {
  updated: Date.now(),
  entity: {
    location: {}
  },
  isFirstRun: null,
  firstRunCheck: false,
  firstRunChecking: false,
  location: null,
  locating: false,
  preparing: false,
  prepared: false,
  avatar: null,
  fingerprint: null,
  displayName: null,
  userAgent: null,
};

function makeDetails() {
  const ran = Math.floor(Math.random() * avatars.length);
  return {
    name: `${avatars[ran].name}-${uuidv1().slice(0, 4)}`,
    avatar: avatars[ran].avatar
  };
}

const firebase = createReducer(firebaseSlice, {

  [prepare]: (state) => {
    state.updated = Date.now();
    const newEntity = {
      displayName: state.displayName,
      fingerprint: state.fingerprint,
      updated: Date.now(),
      avatar: state.avatar,
    };
    newEntity.userAgent = state.userAgent
    newEntity.location = state.location;
    state.entity = newEntity;
    state.preparing = false;
    return state;
  },

  [location]: (state, action) => {
    state.updated = Date.now();
    state.location = action.iPLocation;
    return state;
  },

  [locating]: (state, action) => {
    state.updated = Date.now();
    state.locating = action.locating;
    return state;
  },

  [firstRun]: (state, action) => {
    state.updated = Date.now();
    const details = makeDetails();
    state.displayName = details.name;
    state.avatar = details.avatar;
    state.visits = 1
    return state;
  },

  [fingerprint]: (state, action) => {
    state.fingerprint = action.fingerprint;
    return state;
  },

  [userAgent]: (state, action) => {
    state.updated = Date.now();
    state.userAgent = action.userAgent;
    return state;
  },

  [checking]: (state, action) => {
    state.firstRunChecking = action.firstRunChecking;
    return state;
  },

  [reset]: () => {
    return firebaseSlice;
  }
});

export { firebase };
