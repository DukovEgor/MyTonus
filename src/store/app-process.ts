import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/conts';

const initialState = {
  currentStep: 1,
};

export const appProcess = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setCurrentStep } = appProcess.actions;
