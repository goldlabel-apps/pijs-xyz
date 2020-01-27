import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getStore } from "../../";

export const error = createAction(`WEATHER/ERROR`);
export const reset = createAction(`WEATHER/RESET`);
export const save = createAction(`WEATHER/SAVE`);
export const fetching = createAction(`WEATHER/FETCHING`);

export const fetchWeather = () => {
  const store = getStore();
  const { baseUrl } = store.getState().weather;
  const endPoint = `weather?lat=-27.211579&l&lon=153.107658`;

  store.dispatch({
    type: "WEATHER/FETCHING",
    fetching: true
  });

  axios
    .get(`${baseUrl}${endPoint}&APPID=${process.env.REACT_APP_OPEN_WEATHER}`)
    .then(function(response) {
      // console.log(response.data);
      store.dispatch({
        type: "WEATHER/SAVE",
        data: response.data
      });
    })
    .catch(function(error) {
      store.dispatch({
        type: "WEATHER/ERROR",
        error: error.toString()
      });
    })
    .finally(function () {
      store.dispatch({
        type: "WEATHER/FETCHING",
        fetching: false
      })
      store.dispatch({
        type: "FIREBASE/PREPARE",
        state: store.getState(),
      })
    })
};
