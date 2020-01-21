import { createAction } from "@reduxjs/toolkit";
import { getStore } from "../../";
import { db } from "./fire";

export const anAction = createAction(`FIREBASE/DO_THIS`);
export const reset = createAction(`FIREBASE/RESET`);

export const saveFireprint = fingerprint => {
  const store = getStore();
  // const { userEntity } = store.getState();
  // console.log("store", );
  let storeData = store.getState();
  const userEntity = db.collection("userEntities").doc(fingerprint);
  userEntity.set(
    {
      storeData
    },
    { merge: true }
  );
};
