import { createAction } from "@reduxjs/toolkit"
import axios from "axios"
import { getStore } from "../../"

export const reset = createAction(`APP/RESET`)
export const switchTheme = createAction(`APP/THEME/SWITCH`)
export const clockTick = createAction(`APP/CLOCKWORK/TICK`)
export const play = createAction(`APP/ZXSPECTRUM/PLAY`)
export const played = createAction(`APP/ZXSPECTRUM/PLAYED`)
export const fetchingWeather = createAction(`APP/WEATHER/FETCHING`)
export const saveWeather = createAction(`APP/WEATHER/SAVE`)
export const errorWeather = createAction(`APP/WEATHER/ERROR`)
export const cameraUpdate = createAction(`APP/CAMERA/UPDATE`)

export const fetchWeather = () => {
  const baseUrl = `https://api.openweathermap.org/data/2.5/`
  const endPoint = `weather?lat=-27.211579&l&lon=153.107658`
  const store = getStore()
  store.dispatch({
    type: `APP/WEATHER/FETCHING`,
    fetching: true
  })
  axios
    .get(`${baseUrl}${endPoint}&APPID=${process.env.REACT_APP_OPEN_WEATHER}`)
    .then(function(response) {
      store.dispatch({
        type: `APP/WEATHER/SAVE`,
        data: response.data
      })
    })
    .catch(function(error) {
      store.dispatch({
        type: `APP/WEATHER/ERROR`,
        error
      })
    })
    .finally(function() {
      store.dispatch({
        type: `WEATHER/FETCHING`,
        fetching: false
      })
    })
}
