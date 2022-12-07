import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { messageApi } from './localApi/message.api';
import { postsReducer } from './localApi/post.slice';
import { usersApi } from './localApi/users.api';

export const store = configureStore({
  reducer: {
    [messageApi.reducerPath]: messageApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(messageApi.middleware).concat(usersApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;