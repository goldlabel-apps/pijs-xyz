import { createAction } from "@reduxjs/toolkit";

export const start = createAction(`CLOCKWORK/START`);
export const init = createAction(`CLOCKWORK/ASYNCINIT`);
export const pause = createAction(`CLOCKWORK/PAUSE`);
export const tick = createAction(`CLOCKWORK/TICK`);
export const reset = createAction(`CLOCKWORK/RESET`);
