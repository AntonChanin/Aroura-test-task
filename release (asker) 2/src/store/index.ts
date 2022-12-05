import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { localApi } from './localApi/local.api';
import { messagesReducer } from './localApi/local.slice';

export const store = configureStore({
  reducer: {
    [localApi.reducerPath]: localApi.reducer,
    messages: messagesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;