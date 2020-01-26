import { createReducer } from "@reduxjs/toolkit";
import { reset, prepareEntity } from "./actions";

export const firebaseSlice = {
  updated: Date.now(),
  entity: null
};

const avatars = [
  {
    title: `New User`,
    slug: `anon`,
    src: `https://firebasestorage.googleapis.com/v0/b/user-entity.appspot.com/o/avatars%2Favatar-weizang.png?alt=media&token=41eaad0f-39b2-4870-ace2-140f1d116a4a`
  },
  {
    title: `Wei Zang`,
    slug: `weizang`,
    src: `https://firebasestorage.googleapis.com/v0/b/user-entity.appspot.com/o/avatars%2Favatar-weizang.png?alt=media&token=41eaad0f-39b2-4870-ace2-140f1d116a4a`
  },
  {
    title: `Milky Lacks Toes`,
    slug: `milky`,
    src: `https://firebasestorage.googleapis.com/v0/b/user-entity.appspot.com/o/avatars%2Fmilky.png?alt=media&token=3c819ee1-bdd1-43e9-a139-8f820ee5fe79`
  }
];
console.log(avatars);

const firebase = createReducer(firebaseSlice, {
  [prepareEntity]: (state, action) => {
    state.updated = Date.now();
    // console.log("niceState", action.niceState);
    const { clockwork, userEntity, pi, weather } = action.niceState;
    let newEntity = {
      displayName: `New User`,
      fingerprint: userEntity.fingerprint,
      avatar: avatars[0].src,
      ticks: clockwork.ticks,
      created: userEntity.created,
      updated: userEntity.updated,
      weather: {
        lastFetchSuccess: weather.lastFetchSuccess
      },
      pi: {
        lastConnectSuccess: pi.lastConnectSuccess,
        url: pi.url,
        piTime: pi.piTime,
        location: pi.location,
        firmwareVersion: pi.firmwareVersion
      },
      location: {
        ip: userEntity.ip,
        countryName: userEntity.country_name,
        countryCode: userEntity.country_code,
        stateProv: userEntity.state_prov,
        district: userEntity.district,
        city: userEntity.city,
        zipcode: userEntity.zipcode,
        latitude: userEntity.latitude,
        longitude: userEntity.longitude,
        isEU: userEntity.isEU,
        callingCode: userEntity.calling_code,
        countryTLD: userEntity.country_tld,
        countryFlag: userEntity.country_flag,
        currencySymbol: userEntity.currency_symbol,
        currencyCode: userEntity.currency_code,
        currencyName: userEntity.currency_name
      },
      system: {
        device: userEntity.device,
        userAgent: userEntity.userAgent,
        browser: userEntity.browser,
        browserVersion: userEntity.browserVersion,
        os: userEntity.os,
        osVersion: userEntity.osVersion,
        timezone: userEntity.time_zone,
        isMobile: userEntity.isMobile,
        resolutionWidth: userEntity.resolutionWidth,
        resolutionHeight: userEntity.resolutionHeight,
        languages: userEntity.languages
      },

      messages: [
        {
          time: Date.now(),
          from: `pijs.app`,
          message: `Hello new user. What can we call you?`
        }
      ]
    };
    state.entity = newEntity;
    return state;
  },
  [reset]: () => {
    return firebaseSlice;
  }
});

export { firebase };
