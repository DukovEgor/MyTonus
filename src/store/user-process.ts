import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/conts';

const initialState = {
  user: {},
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserData } = userProcess.actions;
