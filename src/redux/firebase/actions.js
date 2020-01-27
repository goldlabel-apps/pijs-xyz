import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getStore } from "../../";
import Fingerprint2 from "fingerprintjs2";
import { db } from "./fire";

export const reset = createAction(`FIREBASE/RESET`);
export const prepare = createAction(`FIREBASE/PREPARE`);
export const prepare2 = createAction(`FIREBASE/PREPARE2`);
export const preparing = createAction(`FIREBASE/PREPARING`);
export const checking = createAction(`FIREBASE/CHECKING`);
export const fingerprint = createAction(`FIREBASE/FINGERPRINT`);
export const firstRun = createAction(`FIREBASE/FIRSTRUN`);

export const locating = createAction(`FIREBASE/LOCATING`);
export const location = createAction(`FIREBASE/LOCATION`);
export const locationError = createAction(`FIREBASE/LOCATION/ERROR`);

export const locateUser = store => {
  console.log("locateUser");
  store.dispatch({
    type: `FIREBASE/LOCATING`,
    locating: true
  });
  axios
    .get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
    )
    .then(function(response) {
      store.dispatch({
        type: "FIREBASE/LOCATION",
        iPLocation: response.data
      });
    })
    .catch(function(error) {
      store.dispatch({
        type: "FIREBASE/LOCATION/ERROR",
        error
      });
    });
};

export const syncFirebase = store => {
  store.dispatch({
    type: `FIREBASE/PREPARING`,
    preparing: true
  });
  store.dispatch({
    type: `FIREBASE/PREPARE`,
    state: store.getState()
  });
};

export const checkFirstRun = () => {
  const store = getStore();
  store.dispatch({
    type: `FIREBASE/CHECKING`,
    firstRunChecking: true
  });
  Fingerprint2.getPromise()
    .then(function(components) {
      const values = components.map(function(component) {
        return component.value;
      });
      const fingerprint = Fingerprint2.x64hash128(values.join(""), 31);
      store.dispatch({
        type: "FIREBASE/FINGERPRINT",
        fingerprint
      });
      return fingerprint;
    })
    .then(function(fingerprint) {
      db.collection("userEntities")
        .doc(fingerprint)
        .get()
        .then(function(entity) {
          let firstRun = true;
          if (entity.exists) {
            firstRun = false;
          }
          store.dispatch({
            type: `FIREBASE/FIRSTRUN`,
            firstRun
          });
        });
    })
    .then(function() {
      store.dispatch({
        type: `FIREBASE/CHECKING`,
        firstRunChecking: false
      });
    });
};

export const prepareEntity = () => {
  const store = getStore();
  store.dispatch({
    type: `FIREBASE/PREPARE`,
    niceState: store.getState()
  });
};

/*
export const initFirestore = () => {
  console.log("initFirestore");
};

export const firestoreForget = payload => {
  console.log(`firestoreForget`, payload);
};

export const firestoreListen = payload => {
  console.log(`firestoreListen`, payload);
};


export const initFirestore_X = () => {
    const store = getStore();
    const { userEntity } = store.getState();
    const { fingerprint } = userEntity;
    store.dispatch({
      type: `FIREBASE/PREPARE`,
      niceState: store.getState()
    });
    if (fingerprint) {
      const doc = db.collection("userEntities").doc(fingerprint);
      doc.set({ userEntity }, { merge: true });
    }
};


*/
