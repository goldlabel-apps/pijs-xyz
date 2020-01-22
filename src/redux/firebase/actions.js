import { createAction } from "@reduxjs/toolkit";
// import { getStore } from "../../";
// import { db } from "./fire";

export const reset = createAction(`FIREBASE/RESET`);

export const saveFireprint = () => {
  // Exit early if the data is invalid
  //   const store = getStore();
  //   const { fingerprint } = store.getState().userEntity;
  //   let storeData = store.getState();
  //   const userEntity = db.collection("userEntities").doc(fingerprint);
  //   userEntity.set({ storeData }, { merge: true });
};
