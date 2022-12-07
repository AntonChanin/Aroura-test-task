import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostModel } from '../../models/model';

type postState = {
  posts: PostModel[];
}

const LS_POSTS_KEY = 'rfk_posts';

const initialState: postState = {
  posts: JSON.parse(localStorage.getItem(LS_POSTS_KEY) ?? '[]'),
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<PostModel>) {
      state.posts.push(action.payload);
      localStorage.setItem(LS_POSTS_KEY, JSON.stringify(state.posts));
    },
    removePost(state, action: PayloadAction<PostModel>) {
      state.posts = state.posts.filter(f => f !== action.payload);
      localStorage.setItem(LS_POSTS_KEY, JSON.stringify(state.posts));
    },
  },
});

export const { actions: postsActions, reducer: postsReducer } = postSlice;
