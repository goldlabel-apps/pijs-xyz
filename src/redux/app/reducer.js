import { createReducer } from "@reduxjs/toolkit"
import { clockTick, reset, switchTheme } from "./actions"

export const appSlice = {
  clockwork: {
    tickDelay: 1,
    ticking: false,
    ticks: 0
  },
  theme: {
    mode: `dark`
  }
}

const appReducer = createReducer(appSlice, {
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
