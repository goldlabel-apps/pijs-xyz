import { createReducer } from "@reduxjs/toolkit";
import { fetching, toggleExpand, onError, reset, save } from "./actions";

/*
const title = `Weather`;
const windSpeed = `${Math.round((data.wind.speed * 3.6) * 10) / 10} km/h`;
const windDirection = `${degToCompass(data.wind.deg) }`;
const temperature = `${Math.round((data.main.temp - 273.15) * 10) / 10 || 0} °C`;
const humidity = `${data.main.humidity} %`;
const overview = `${data.weather[0].main || ``} ${data.weather[0].description || ``}`;
const outlookIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
const sunrise = moment(data.sys.sunrise * 1000).fromNow();
const sunset = moment(data.sys.sunset * 1000).fromNow();
*/

export const weatherSlice = {
  updated: Date.now(),
  expanded: false,
  baseUrl: `https://api.openweathermap.org/data/2.5/`,
  fetching: false,
  fetched: false,
  lastFetchSuccess: null,
  error: false
};

const weather = createReducer(weatherSlice, {
  //
  [save]: (state, action) => {
    console.log("save weather", action.data);
    state.updated = Date.now();
    return state;
  },

  [fetching]: (state, action) => {
    // console.log("onError", action.error);
    state.updated = Date.now();
    state.fetching = action.fetching;
    return state;
  },

  [onError]: (state, action) => {
    // console.log("onError", action.error);
    state.updated = Date.now();
    return state;
  },

  [toggleExpand]: state => {
    state.updated = Date.now();
    state.expanded = !state.expanded;
    return state;
  },

  [reset]: () => {
    return weatherSlice;
  }
});

export { weather };
