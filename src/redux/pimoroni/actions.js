import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getStore } from "../../";

export const onError = createAction(`PIMORONI/ERROR`);
export const fetching = createAction(`PIMORONI/FETCHING`);
export const toggleExpand = createAction(`PIMORONI/TOGGLE_EXPAND`);
export const reset = createAction(`PIMORONI/RESET`);
export const save = createAction(`PIMORONI/SAVE`);

export const fetchPimoroni = () => {
  const store = getStore();
  const { baseUrl } = store.getState().pimoroni;
  store.dispatch({
    type: "PIMORONI/FETCHING",
    fetching: true
  });

  axios
    .get(`${baseUrl}`)
    .then(function(response) {
      // console.log("response", response.data);
      store.dispatch({
        type: "PIMORONI/SAVE",
        data: response.data
      });
    })
    .catch(function(error) {
      //   console.log("error", error);
      store.dispatch({
        type: "PIMORONI/ERROR",
        error: error.toString()
      });
    });
};
