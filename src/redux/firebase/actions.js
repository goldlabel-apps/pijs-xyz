import { createAction } from "@reduxjs/toolkit";
import { getStore } from "../../";
import { db } from "./fire";

export const reset = createAction(`FIREBASE/RESET`);

export const saveFireprint = () => {
  const store = getStore();
  const { userEntity } = store.getState();
  const { fingerprint } = userEntity;
  //   console.log(`userEntity`, userEntity);
  if (fingerprint) {
    const doc = db.collection("userEntities").doc(fingerprint);
    doc.set({ userEntity }, { merge: true });
  }
};
