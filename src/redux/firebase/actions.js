import { createAction } from "@reduxjs/toolkit";
import { getStore } from "../../";
// import { db } from "./fire";

export const reset = createAction(`FIREBASE/RESET`);
export const prepare = createAction(`FIREBASE/PREPARE`);

export const isFirstRun = () => {
  console.log("isFirstRun? connect to firebase with a fingerprint to ind out");
};

export const initFirestore = () => {
  console.log("initFirestore");
};

export const firestoreForget = payload => {
  console.log(`firestoreForget`, payload);
};

export const firestoreListen = payload => {
  console.log(`firestoreListen`, payload);
};

export const prepareEntity = () => {
  const store = getStore();
  store.dispatch({
    type: `FIREBASE/PREPARE`,
    niceState: store.getState()
  });
};

export const initFirestore_X = () => {
  //   const store = getStore();
  //   const { userEntity } = store.getState();
  //   const { fingerprint } = userEntity;
  //   store.dispatch({
  //     type: `FIREBASE/PREPARE`,
  //     niceState: store.getState()
  //   });
  //   if (fingerprint) {
  //     const doc = db.collection("userEntities").doc(fingerprint);
  //     doc.set({ userEntity }, { merge: true });
  //   }
};
