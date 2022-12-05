import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type localState = {
  favorites: string[];
}

const LS_FAV_KEY = 'rfk';

const initialState: localState = {
  favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
}

export const loaclSlice = createSlice({
  name: 'local',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<string>) {
      state.favorites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
    removeMessage(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(f => f !== action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
  },
});

export const { actions: localActions, reducer: messagesReducer } = loaclSlice;
