import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import Fingerprint2 from "fingerprintjs2";
import { getStore } from "../../";
import userAgentParser from "ua-parser-js";

export const reset = createAction(`USERENTITY/RESET`);
export const init = createAction(`USERENTITY/INIT`);

export const getUserEntity = () => {
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
      type: "USERENTITY/INIT",
      fingerprint,
      components,
      userAgent
    });
    // fire(fireprint);
  });
};

export const geoLocate = () => {
  const store = getStore();
  const { ipgeo } = store.getState().system.userEntity;
  let updateRequired = false;
  if (!ipgeo.data) {
    updateRequired = true;
  }
  if (!ipgeo.lastFetch) {
    updateRequired = true;
  }
  if (ipgeo.lastFetch !== null && ipgeo.data !== null) {
    if (Date.now() - ipgeo.lastFetch > 10000) {
      updateRequired = true;
    }
  }
  updateRequired = false;
  if (updateRequired) {
    axios
      .get(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
      )
      .then(function(response) {
        store.dispatch({
          type: "SYSTEM/SET/IPGEO",
          ipgeo: response.data
        });
      })
      .catch(function(error) {
        store.dispatch({
          type: "SYSTEM/IPGEO/ERROR",
          error
        });
      });
  }
};
