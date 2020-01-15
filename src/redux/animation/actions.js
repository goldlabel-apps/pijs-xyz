import { createAction } from '@reduxjs/toolkit';

export const animate = createAction(`ANIMATION/START`);
export const reset = createAction(`ANIMATION/RESET`);