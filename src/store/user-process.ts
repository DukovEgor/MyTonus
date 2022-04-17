import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../utils/conts';

const initialState = {
  user: {},
  authorizationStatus: AuthorizationStatus.NoAuth,
  weight: 0,
  height: 0,
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
    setUserWeight: (state, action) => {
      state.weight = action.payload;
    },
    setUserHeight: (state, action) => {
      state.height = action.payload;
    },
  },
});

export const { setUserData, requireAuthorization, setUserHeight, setUserWeight  } = userProcess.actions;
