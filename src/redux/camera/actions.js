import { createAction } from "@reduxjs/toolkit";

export const toggleExpand = createAction(`CAMERA/TOGGLE_EXPAND`);
export const pause = createAction(`CAMERA/PAUSE`);
export const reset = createAction(`CAMERA/RESET`);
export const update = createAction(`CAMERA/UPDATE`);
