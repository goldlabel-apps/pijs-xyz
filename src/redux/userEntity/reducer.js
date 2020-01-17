import { createReducer } from "@reduxjs/toolkit";
import {
  reset,
  init,
  fireprintResponse,
  initComplete,
  getFireprint,
  getIPLocation,
  ipLocationResponse,
  ipLocationError,
  toggleExpand
} from "./actions";

export const userEntitySlice = {
  updated: Date.now(),
  expanded: false,
  created: null,
  initting: false,
  initted: false,
  ipLocationInitted: false,
  fireprintInitted: false,
  fingerprint: null,
  resolutionWidth: null,
  resolutionHeight: null,
  userAgent: null,
  browser: null,
  browserVersion: null,
  os: null,
  osVersion: null,
  device: null,
  isMobile: null,
  ip: null,
  country_name: null,
  country_code: null,
  state_prov: null,
  district: null,
  city: null,
  zipcode: null,
  latitude: null,
  longitude: null,
  isEU: null,
  calling_code: null,
  country_tld: null,
  country_flag: null,
  time_zone: null,
  currency_name: null,
  currency_symbol: null,
  currency_code: null,
  languages: null
};

const isMobile = device => {
  let mobile = "no";
  if (device.vendor || device.model) {
    mobile = "yes";
  }
  return mobile;
};

const resolveDevice = (device, os) => {
  let deviceString = false;
  if (device.vendor) {
    deviceString = " " + device.vendor;
  }
  if (device.model) {
    deviceString += " " + device.model;
  }
  if (!deviceString) {
    deviceString = `Desktop`;
  }
  return deviceString;
};

const userEntity = createReducer(userEntitySlice, {
  [init]: state => {
    getFireprint();
    getIPLocation();
    state.updated = Date.now();
    state.initting = true;
    return state;
  },

  [initComplete]: state => {
    // console.log("initComplete");
    state.updated = Date.now();
    state.initting = false;
    state.initted = true;
    return state;
  },

  [fireprintResponse]: (state, action) => {
    state.updated = Date.now();
    state.created = Date.now();
    state.fireprintInitted = true;
    state.userAgent = action.components.find(o => o.key === "userAgent").value;
    state.resolutionWidth = action.components.find(
      o => o.key === "screenResolution"
    ).value[1];
    state.resolutionHeight = action.components.find(
      o => o.key === "screenResolution"
    ).value[0];
    state.fingerprint = action.fingerprint;
    state.browser = action.userAgent.browser.name;
    state.browserVersion = action.userAgent.browser.major;
    state.os = action.userAgent.os.name;
    state.osVersion = action.userAgent.os.version;
    state.device = resolveDevice(action.userAgent.device, action.userAgent.os);
    state.isMobile = isMobile(action.userAgent.device);
    return state;
  },

  [ipLocationResponse]: (state, action) => {
    state.updated = Date.now();
    state.ipLocationInitted = true;
    state.ip = action.iPLocation.ip;
    state.country_code = action.iPLocation.country_code2;
    state.country_name = action.iPLocation.country_name;
    state.state_prov = action.iPLocation.state_prov;
    state.district = action.iPLocation.district;
    state.city = action.iPLocation.city;
    state.zipcode = action.iPLocation.zipcode;
    state.latitude = action.iPLocation.latitude;
    state.longitude = action.iPLocation.longitude;
    state.isEU = action.iPLocation.is_eu ? "yes" : "no";
    state.calling_code = action.iPLocation.calling_code;
    state.country_tld = action.iPLocation.country_tld;
    state.country_flag = action.iPLocation.country_flag;
    state.time_zone = action.iPLocation.time_zone.name;
    state.currency_name = action.iPLocation.currency.name;
    state.currency_symbol = action.iPLocation.currency.symbol;
    state.currency_code = action.iPLocation.currency.code;
    state.languages = action.iPLocation.languages;
    return state;
  },

  [ipLocationError]: (state, action) => {
    state.updated = Date.now();
    state.ipLocationError = action.error;
    return state;
  },

  [toggleExpand]: state => {
    state.updated = Date.now();
    state.expanded = !state.expanded;
    return state;
  },

  [reset]: () => {
    return userEntitySlice;
  }
});

export { userEntity };
