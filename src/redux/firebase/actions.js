import { createAction } from "@reduxjs/toolkit"
import axios from "axios"
import { getStore } from "../../"
import Fingerprint2 from "fingerprintjs2"
import UAParser from "ua-parser-js";
import { db } from "./fire"

export const reset = createAction(`FIREBASE/RESET`)
export const prepare = createAction(`FIREBASE/PREPARE`)
export const checking = createAction(`FIREBASE/CHECKING`)
export const fingerprint = createAction(`FIREBASE/FINGERPRINT`)
export const firstRun = createAction(`FIREBASE/FIRSTRUN`)
export const locating = createAction(`FIREBASE/LOCATING`)
export const location = createAction(`FIREBASE/LOCATION`)
export const locationError = createAction(`FIREBASE/LOCATION/ERROR`)
export const userAgent = createAction(`FIREBASE/USERAGENT`)

export const initFirebase = store => {
  locateUser(store)
  checkFirstRun()
}

export const locateUser = store => {
  const state = store.getState();
  store.dispatch({
    type: `FIREBASE/LOCATING`,
    locating: true
  })
  axios
    .get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
    )
    .then(function (response) {
      store.dispatch({
        type: "FIREBASE/LOCATION",
        iPLocation: response.data
      })
      store.dispatch({ type: "FIREBASE/PREPARE", state })
    })
    .catch(function (error) {
      store.dispatch({ type: "FIREBASE/LOCATION/ERROR", error})
    })
    .finally(function () { 
      store.dispatch({ type: `FIREBASE/LOCATING`, locating: false })
      store.dispatch({ type: "FIREBASE/PREPARE", state})
    })
}

export const checkFirstRun = () => {
  const store = getStore()
  const state = store.getState();
  store.dispatch({
    type: `FIREBASE/CHECKING`,
    firstRunChecking: true
  })
  Fingerprint2.getPromise()
    .then(function(components) {
      const values = components.map(function(component) {
        return component.value
      })
      const fingerprint = Fingerprint2.x64hash128(values.join(""), 31)
      store.dispatch({
        type: "FIREBASE/FINGERPRINT",
        fingerprint
      })
      store.dispatch({ type: "FIREBASE/PREPARE", state })
      return fingerprint
    })
    .then(function(fingerprint) {
      db.collection("userEntities")
        .doc(fingerprint)
        .get()
        .then(function(entity) {
          let isFirstRun = true
          if (entity.exists) {
            isFirstRun = false
          }
          store.dispatch({ type: `FIREBASE/FIRSTRUN`, isFirstRun })
          store.dispatch({ type: "FIREBASE/PREPARE", state })
        })
    })
    .then(function () {
      store.dispatch({type: "FIREBASE/USERAGENT", userAgent: new UAParser().getResult()})
      store.dispatch({ type: "FIREBASE/PREPARE", state })
    })
    .finally(function() {
      store.dispatch({ type: "FIREBASE/PREPARE", state })
    })
}









// export const prepareEntity = () => {
//   const store = getStore()
//   store.dispatch({
//     type: `FIREBASE/PREPARE`,
//     niceState: store.getState()
//   })
// }

/*
export const initFirestore = () => {
  console.log("initFirestore")
}

export const firestoreForget = payload => {
  console.log(`firestoreForget`, payload)
}

export const firestoreListen = payload => {
  console.log(`firestoreListen`, payload)
}


export const initFirestore_X = () => {
    const store = getStore()
    const { userEntity } = store.getState()
    const { fingerprint } = userEntity
    store.dispatch({
      type: `FIREBASE/PREPARE`,
      niceState: store.getState()
    })
    if (fingerprint) {
      const doc = db.collection("userEntities").doc(fingerprint)
      doc.set({ userEntity }, { merge: true })
    }
}


*/
