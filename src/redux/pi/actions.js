import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getStore } from "../../";

export const onError = createAction(`PI/ERROR`);
export const setConnecting = createAction(`PI/SET_CONNECTING`);
export const toggleExpand = createAction(`PI/TOGGLE_EXPAND`);
export const reset = createAction(`PI/RESET`);
export const save = createAction(`PI/SAVE`);

// https://pi.listingslab.io/pimoroni

export const connectPi = () => {
  const store = getStore();
  const { baseUrl } = store.getState().pi;
  // console.log("connectPi", baseUrl);
  store.dispatch({
    type: "PI/SET_CONNECTING",
    connecting: true
  });

  axios
    .get(`${baseUrl}`)
    .then(function(response) {
      // console.log("response", response.data);
      store.dispatch({
        type: "PI/SAVE",
        data: response.data
      });
    })
    .catch(function(error) {
      //   console.log("error", error);
      store.dispatch({
        type: "PI/ERROR",
        error: error.toString()
      });
    });

  //
  //   store.dispatch({
  //     type: "PI/ERROR",
  //     error: `bollocks`
  //   });
};
