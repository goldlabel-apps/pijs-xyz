import { createReducer } from "@reduxjs/toolkit";
import { fetching, error, reset, save } from "./actions";
import moment from "moment";

export const weatherSlice = {
  updated: Date.now(),
  expanded: true,
  baseUrl: `https://api.openweathermap.org/data/2.5/`,
  fetching: false,
  fetched: false,
  lastFetchSuccess: null,
  error: false,
  windSpeed: null,
  windDirection: null,
  temperature: null,
  humidity: null,
  overview: null,
  outlookIcon: null,
  sunrise: null,
  sunset: null
};

function degToCompass(num) {
  while (num < 0) num += 360;
  while (num >= 360) num -= 360;
  let val = Math.round((num - 11.25) / 22.5);
  let arr = [
    "North",
    "North North East",
    "North East",
    "East North East",
    "East",
    "East Sout East",
    "South East",
    "Sout South East",
    "South",
    "South South West",
    "South West",
    "West South West",
    "West",
    "West North West",
    "North West",
    "North North West"
  ];
  return arr[Math.abs(val)];
}

const weather = createReducer(weatherSlice, {
  //
  [save]: (state, action) => {
    // console.log("save", action.data);

    state.updated = Date.now();
    state.lastFetchSuccess = Date.now();
    state.fetched = true;
    state.error = false;

    state.windSpeed = `${Math.round(action.data.wind.speed * 3.6 * 10) /
      10} km/h`;
    state.windDirection = `${degToCompass(action.data.wind.deg)}`;
    state.temperature = `${Math.round((action.data.main.temp - 273.15) * 10) /
      10 || 0} °C`;
    state.humidity = `${action.data.main.humidity} %`;
    state.overview = `${action.data.weather[0].description || ``}`;
    state.outlookIcon = `https://openweathermap.org/img/w/${action.data.weather[0].icon}.png`;
    state.sunrise = moment(action.data.sys.sunrise * 1000).fromNow();
    state.sunset = moment(action.data.sys.sunset * 1000).fromNow();
    return state;
  },

  [fetching]: (state, action) => {
    // console.log("fetching", action.fetching);
    state.updated = Date.now();
    state.fetching = action.fetching;
    return state;
  },

  [error]: (state, action) => {
    // console.log("onError", action.error);
    state.updated = Date.now();
    state.error = action.error.toString();
    return state;
  },

  [reset]: () => {
    return weatherSlice;
  }
});

export { weather };
