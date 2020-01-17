import { createAction } from "@reduxjs/toolkit";

export const play = createAction(`ADVERT/PLAY`);
export const pause = createAction(`ADVERT/PAUSE`);
export const start = createAction(`ADVERT/START`);
export const onComplete = createAction(`ADVERT/COMPLETE`);
export const reset = createAction(`ADVERT/RESET`);
