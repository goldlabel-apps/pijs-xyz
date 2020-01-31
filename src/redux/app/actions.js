import { createAction } from "@reduxjs/toolkit"

export const reset = createAction(`APP/RESET`)
export const switchTheme = createAction(`APP/THEME/SWITCH`)

export const updateEntity = payload => {
  console.log("updateEntity", payload)
  return null
}
