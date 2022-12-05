import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { messageApi } from './localApi/message.api';
import { postsReducer } from './localApi/post.slice';

export const store = configureStore({
  reducer: {
    [messageApi.reducerPath]: messageApi.reducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(messageApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;