import { createAction } from "@reduxjs/toolkit";

export const reset = createAction(`SYSTEM/RESET`);
export const update = createAction(`SYSTEM/UPDATE`);
export const error = createAction(`SYSTEM/ERROR`);
export const loaded = createAction(`SYSTEM/LOADED`);

export const restart = createAction(`SYSTEM/RESTART`);

export const connectionDialog = createAction(`SYSTEM/DIALOG/CONNECTION`);

export const toggleEffectMenu = createAction(`SYSTEM/MENU_TOGGLE/EFFECTS`);
