import { configureStore } from '@reduxjs/toolkit';
import toastReducer from './toast/toastSlice';
import promptReducer from './prompt/promptSlice';
import simpleModalsReducer from './simple-modals/simpleModalsSlice';
import innerWindowSizeReducer from './inner-window-size/innerWindowSizeSlice';

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    prompt: promptReducer,
    simpleModals: simpleModalsReducer,
    innerWindowSize: innerWindowSizeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
