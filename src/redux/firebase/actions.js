import { createAction } from "@reduxjs/toolkit";
import { getStore } from "../../";
// import { db } from "./fire";

export const reset = createAction(`FIREBASE/RESET`);
export const prepareEntity = createAction(`FIREBASE/PREPARE`);

export const firestoreForget = payload => {
  console.log(`firestoreForget`, payload);
};

export const firestoreListen = payload => {
  console.log(`firestoreListen`, payload);
};

export const saveFireprint = () => {
  const store = getStore();
  //   const { userEntity } = store.getState();
  //   const { fingerprint } = userEntity;
  store.dispatch({
    type: `FIREBASE/PREPARE`,
    niceState: store.getState()
  });

  //   if (fingerprint) {
  //     const doc = db.collection("userEntities").doc(fingerprint);
  //     doc.set({ userEntity }, { merge: true });
  //   }
};
