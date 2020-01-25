import { createAction } from "@reduxjs/toolkit";

export const reset = createAction(`CAMERA/RESET`);
export const update = createAction(`CAMERA/UPDATE`);
export const error = createAction(`CAMERA/ERROR`);
export const loaded = createAction(`CAMERA/LOADED`);
export const effect = createAction(`CAMERA/EFFECT`);
