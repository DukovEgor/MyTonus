import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../utils/conts';

const initialState = {
  user: {},
  authorizationStatus: AuthorizationStatus.NoAuth,
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserData, requireAuthorization } = userProcess.actions;
