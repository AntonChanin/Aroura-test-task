import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostModel } from '../../models/model';

type messageState = {
  posts: PostModel[];
}

const LS_FAV_KEY = 'rfk';

const initialState: messageState = {
  posts: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
}

export const messageSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<PostModel>) {
      state.posts.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.posts));
    },
    removeMessage(state, action: PayloadAction<PostModel>) {
      state.posts = state.posts.filter(f => f !== action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.posts));
    },
  },
});

export const { actions: postsActions, reducer: postsReducer } = messageSlice;
