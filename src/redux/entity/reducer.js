import { createReducer } from "@reduxjs/toolkit";
import { reset } from "./actions";

export const entitySlice = {};

const entity = createReducer(entitySlice, {
  [reset]: () => {
    return entitySlice;
  }
});

export { entity };
