import { createAction } from "@reduxjs/toolkit";

export const toggleExpand = createAction(`CAMERA/TOGGLE_EXPAND`);
export const reset = createAction(`CAMERA/RESET`);
export const update = createAction(`CAMERA/UPDATE`);
export const error = createAction(`CAMERA/ERROR`);
