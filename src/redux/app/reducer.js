import { createReducer } from "@reduxjs/toolkit"
import { play, played, clockTick, reset, switchTheme } from "./actions"

export const appSlice = {
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
