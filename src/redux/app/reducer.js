import { createReducer } from "@reduxjs/toolkit"
import { reset, switchTheme } from "./actions"

export const appSlice = {
  clockwork: {
    tickDelay: 1,
    ticking: false,
    ticks: 0
  },
  theme: {
    mode: `light`
  }
}

const appReducer = createReducer(appSlice, {
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
