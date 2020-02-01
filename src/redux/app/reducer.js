import { createReducer } from "@reduxjs/toolkit"
import {
  fetchingWeather,
  saveWeather,
  errorWeather,
  play,
  played,
  clockTick,
  reset,
  switchTheme
} from "./actions"

export const appSlice = {
  weather: {
    fetching: false,
    fetched: false,
    data: null,
    error: null,
    lastFetchSuccess: null
  },
  camera: {
    fetching: false,
    fetched: false,
    data: null,
    error: null
  },
  map: {
    fetching: false,
    fetched: false,
    data: null,
    error: null,
    style: {
      light: `mapbox://styles/listingslab/ck4uugpxf13y11cqp72z8snc4`,
      dark: `mapbox://styles/listingslab/ck4c1er100to21co6sd5kl563`
    }
  },
  theme: {
    mode: `dark`
  },
  zxSpectrum: {
    played: false,
    playing: false
  },
  clockwork: {
    tickDelay: 1,
    ticking: false,
    ticks: 0
  }
}

const appReducer = createReducer(appSlice, {
  [errorWeather]: (state, action) => {
    state.weather.error = action.error.toString()
    return state
  },
  [saveWeather]: (state, action) => {
    state.weather.data = action.data
    state.weather.error = null
    state.weather.lastFetchSuccess = Date.now()
    return state
  },
  [fetchingWeather]: (state, action) => {
    state.weather.fetching = action.fetching
    return state
  },

  [play]: state => {
    state.zxSpectrum.playing = true
    return state
  },
  [played]: state => {
    state.zxSpectrum.played = true
    state.zxSpectrum.playing = false
    return state
  },
  [clockTick]: state => {
    state.clockwork.ticks++
    // console.log("clockTick", state.clockwork.ticks)
    return state
  },
  [switchTheme]: (state, action) => {
    state.theme.mode = action.newMode
    // console.log("switchTheme", action.newMode)
    return state
  },
  [reset]: () => {
    return appSlice
  }
})

export { appReducer }
