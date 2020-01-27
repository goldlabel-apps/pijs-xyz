import { createAction } from "@reduxjs/toolkit"
import axios from "axios"
import { getStore } from "../../"

export const error = createAction(`PI/ERROR`)
export const fetching = createAction(`PI/FETCHING`)
export const reset = createAction(`PI/RESET`)
export const save = createAction(`PI/SAVE`)

export const fetchPi = () => {
  const store = getStore()
  const { baseUrl } = store.getState().pi
  store.dispatch({ type: "PI/FETCHING", fetching: true })
  axios
    .get(`${baseUrl}`)
    .then(function(response) {
      store.dispatch({ type: "PI/SAVE", pi: response.data })
    })
    .catch(function(error) {
      store.dispatch({
        type: "PI/ERROR",
        error: error.toString()
      })
    })
    .finally(function () {
      store.dispatch({ type: "PI/FETCHING", fetching: false })
      store.dispatch({ type: "FIREBASE/PREPARE",  state: store.getState() })
    })
}
