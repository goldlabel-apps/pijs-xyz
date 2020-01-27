import { createReducer } from "@reduxjs/toolkit";
import uuidv1 from "uuid/v1";
import {
  firstRun,
  reset,
  preparing,
  prepare,
  //   prepare2,
  checking,
  fingerprint,
  locating,
  location
} from "./actions";

export const firebaseSlice = {
  updated: Date.now(),
  entity: null,
  firstRun: null,
  firstRunCheck: false,
  firstRunChecking: false,

  location: null,
  locating: false,

  preparing: false,
  prepared: false,

  avatar: null,
  fingerprint: null,
  displayName: null
};

function makeDetails() {
  // ADD: "Anon", "WeiZang"
  let nameArr = [
    {
      name: `Mumma`,
      avatar: `https://firebasestorage.googleapis.com/v0/b/user-entity.appspot.com/o/avatars%2Fmumma.png?alt=media&token=c249dc5a-1f63-4780-905a-22bdfe9c9416`
    },
    {
      name: `Milky`,
      avatar: `https://firebasestorage.googleapis.com/v0/b/user-entity.appspot.com/o/avatars%2Fmilky.png?alt=media&token=3c819ee1-bdd1-43e9-a139-8f820ee5fe79`
    },
    {
      name: `Chix`,
      avatar: `https://firebasestorage.googleapis.com/v0/b/user-entity.appspot.com/o/avatars%2Fchix.png?alt=media&token=2500fbb5-b13b-4d12-8ce0-445c897c7449`
    },
    {
      name: `Hipster`,
      avatar: `https://firebasestorage.googleapis.com/v0/b/user-entity.appspot.com/o/avatars%2Fhipster.png?alt=media&token=5c0d1f60-239e-4a8f-9e27-0c670bae64dc`
    }
  ];
  const ranIndex = Math.floor(Math.random() * nameArr.length);
  return {
    name: `${nameArr[ranIndex].name}-${uuidv1().slice(0, 4)}`,
    avatar: nameArr[ranIndex].avatar
  };
}

const firebase = createReducer(firebaseSlice, {
  [location]: (state, action) => {
    state.updated = Date.now();
    state.location = action.iPLocation;
    return state;
  },

  [locating]: (state, action) => {
    console.log("[locating]");
    state.updated = Date.now();
    state.locating = action.locating;
    return state;
  },

  [prepare]: (state, action) => {
    state.updated = Date.now();
    const newEntity = {
      fingerprint: state.fingerprint,
      displayName: state.displayName,
      avatar: state.avatar
    };
    const { camera, clockwork, pi, weather } = action.state;

    newEntity.location = state.location;

    if (clockwork) {
      newEntity.clockwork = {
        ticks: clockwork.ticks
      };
    }

    if (pi) {
      newEntity.pi = {
        lastConnectSuccess: pi.lastConnectSuccess
      };
    }

    if (camera) {
      newEntity.camera = {
        lastSuccessfulLoad: camera.lastSuccessfulLoad
      };
    }
    if (weather) {
      newEntity.weather = {
        lastFetchSuccess: weather.lastFetchSuccess
      };
    }

    state.entity = newEntity;
    state.preparing = false;
    return state;
  },

  //   [prepare2]: (state, action) => {
  //     let newEntity = {
  //       created: userEntity.created,
  //       updated: userEntity.updated,
  //       app: {
  //         cameraEffect: camera.effect
  //       },
  //       weather: {
  //         lastFetchSuccess: weather.lastFetchSuccess
  //       },
  //       pi: {
  //         lastConnectSuccess: pi.lastConnectSuccess,
  //         url: pi.url,
  //         piTime: pi.piTime,
  //         location: pi.location,
  //         firmwareVersion: pi.firmwareVersion
  //       },
  //       location: {
  //         ip: userEntity.ip,
  //         countryName: userEntity.country_name,
  //         countryCode: userEntity.country_code,
  //         stateProv: userEntity.state_prov,
  //         district: userEntity.district,
  //         city: userEntity.city,
  //         zipcode: userEntity.zipcode,
  //         latitude: userEntity.latitude,
  //         longitude: userEntity.longitude,
  //         isEU: userEntity.isEU,
  //         callingCode: userEntity.calling_code,
  //         countryTLD: userEntity.country_tld,
  //         countryFlag: userEntity.country_flag,
  //         currencySymbol: userEntity.currency_symbol,
  //         currencyCode: userEntity.currency_code,
  //         currencyName: userEntity.currency_name
  //       },
  //       system: {
  //         device: userEntity.device,
  //         userAgent: userEntity.userAgent,
  //         browser: userEntity.browser,
  //         browserVersion: userEntity.browserVersion,
  //         os: userEntity.os,
  //         osVersion: userEntity.osVersion,
  //         timezone: userEntity.time_zone,
  //         isMobile: userEntity.isMobile,
  //         resolutionWidth: userEntity.resolutionWidth,
  //         resolutionHeight: userEntity.resolutionHeight,
  //         languages: userEntity.languages
  //       },

  //       messages: [
  //         {
  //           time: Date.now(),
  //           from: `pijs.app`,
  //           message: `Hello new user. What can we call you?`
  //         }
  //       ]
  //     };
  //     state.entity = newEntity;
  //     return state;
  //   },

  [firstRun]: (state, action) => {
    const details = makeDetails();
    state.updated = Date.now();
    state.firstRunCheck = true;
    state.firstRun = action.firstRun;
    state.displayName = details.name;
    state.avatar = details.avatar;
    return state;
  },

  [fingerprint]: (state, action) => {
    state.fingerprint = action.fingerprint;
    return state;
  },

  [checking]: (state, action) => {
    state.firstRunChecking = action.firstRunChecking;
    return state;
  },

  [preparing]: (state, action) => {
    state.updated = Date.now();
    state.preparing = action.preparing;
    return state;
  },

  [reset]: () => {
    return firebaseSlice;
  }
});

export { firebase };
