import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import Fingerprint2 from "fingerprintjs2";
import { getStore } from "../../";
import userAgentParser from "ua-parser-js";

// import { saveFireprint } from "../firebase/actions";

export const reset = createAction(`USERENTITY/RESET`);
export const toggleExpand = createAction(`USERENTITY/TOGGLE_EXPAND`);
export const init = createAction(`USERENTITY/INIT`);
export const initComplete = createAction(`USERENTITY/INIT/COMPLETE`);
export const fireprintResponse = createAction(`USERENTITY/FIREPRINT/RESPONSE`);
export const ipLocationResponse = createAction(
  `USERENTITY/IPLOCATION/RESPONSE`
);
export const ipLocationError = createAction(`USERENTITY/IPLOCATION/ERROR`);

export const getFireprint = () => {
  const store = getStore();
  Fingerprint2.getPromise().then(function(components) {
    const values = components.map(function(component) {
      return component.value;
    });
    const fingerprint = Fingerprint2.x64hash128(values.join(""), 31);
    let userAgent = userAgentParser(
      components.find(o => o.key === "userAgent").value
    );
    store.dispatch({
      type: "USERENTITY/FIREPRINT/RESPONSE",
      fingerprint,
      components,
      userAgent
    });
    // saveFireprint(fingerprint);
  });
};

export const getIPLocation = () => {
  const store = getStore();
  axios
    .get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
    )
    .then(function(response) {
      store.dispatch({
        type: "USERENTITY/IPLOCATION/RESPONSE",
        iPLocation: response.data
      });
    })
    .catch(function(error) {
      store.dispatch({
        type: "USERENTITY/IPLOCATION/ERROR",
        error
      });
    });
};
