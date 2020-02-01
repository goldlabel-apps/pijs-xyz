import { createAction } from "@reduxjs/toolkit"
// import axios from "axios";
// import Fingerprint2 from "fingerprintjs2";
// import userAgentParser from "ua-parser-js";
// import { fstore } from "../../fire";
import { getStore } from "../../"

export const reset = createAction(`APP/RESET`)

export const updateEntity = () => {
  const currentEntity = getStore().getState()
  // console.log("currentEntity", currentEntity)
  return currentEntity
}
