import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '../../models/model';

type usersState = {
  me: UserModel;
  users: UserModel[];
  userObj: Record<string, UserModel>;
}

const LS_USERS_KEY = 'rfk_users';
const LS_ME_KEY = 'rfk_me';

const initialState: usersState = {
  me: JSON.parse(localStorage.getItem(LS_ME_KEY) ?? '[]'),
  users: JSON.parse(localStorage.getItem(LS_USERS_KEY) ?? '[]'),
  userObj: (JSON.parse(localStorage.getItem(LS_USERS_KEY) ?? '[]') as UserModel[]).reduce((a, v) => ({ ...a, [v.id]: v}), {}),
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setMe(state, action: PayloadAction<UserModel>) {
      state.me = action.payload;
      localStorage.setItem(LS_ME_KEY, JSON.stringify(state.me));
    },
    setUsers(state, action: PayloadAction<UserModel[]>) {
      state.users = action.payload;
      localStorage.setItem(LS_USERS_KEY, JSON.stringify(state.users));
    },
    setUsersObj(state, action: PayloadAction<UserModel[]>) {
      if (state.users.length && !state.userObj[state.users[0].id]) {
        state.userObj = action.payload.reduce((a, v) => ({ ...a, [v.id]: v}), {});
      }
    }
  },
});

export const { actions: usersActions, reducer: usersReducer } = usersSlice;
