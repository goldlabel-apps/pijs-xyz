import { createAction } from "@reduxjs/toolkit";
import { getStore } from "../../";
import Fingerprint2 from "fingerprintjs2";
import { db } from "./fire";

export const reset = createAction(`FIREBASE/RESET`);
export const prepare = createAction(`FIREBASE/PREPARE`);
export const connecting = createAction(`FIREBASE/CONNECTING`);
export const fingerprint = createAction(`FIREBASE/FINGERPRINT`);

export const isFirstRun = () => {
  const store = getStore();
  store.dispatch({
    type: `FIREBASE/CONNECTING`,
    connecting: true
  });
  Fingerprint2.getPromise()
    .then(function(components) {
      const values = components.map(function(component) {
        return component.value;
      });
      const fingerprint = Fingerprint2.x64hash128(values.join(""), 31);
      // console.log("fingerprint", fingerprint);
      store.dispatch({
        type: "FIREBASE/FINGERPRINT",
        fingerprint
      });
      return fingerprint;
    })
    .then(function(fingerprint) {
      console.log("firestore...", fingerprint);
      db.collection("userEntities")
        .doc(fingerprint)
        .get()
        .then(function(entity) {
          if (entity.exists) {
            // console.log("Document data:", entity.data());
            store.dispatch({
              type: `SYSTEM/FIRSTRUN`,
              firstRun: false
            });
          } else {
            // doc.data() will be undefined in this case
            // console.log("No such document!");
            store.dispatch({
              type: `SYSTEM/FIRSTRUN`,
              firstRun: true
            });
          }
        });
    });
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
