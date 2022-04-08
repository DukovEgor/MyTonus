import { createAsyncThunk } from '@reduxjs/toolkit';
import { FieldValues } from 'react-hook-form';
import { api, store } from '.';
import { errorHandle } from '../components/services/error-handle';
import { saveToken } from '../components/services/token';
import { APIRoute } from '../utils/conts';
import { setCurrentStep } from './app-process';

export const startRegistration = createAsyncThunk(
  'user/firstStep',
  async (userData: FieldValues) => {
    try {
      // eslint-disable-next-line no-console
      console.log(userData);
      const { data } = await api.post(APIRoute.User, userData);
      saveToken(data.token);
      const { APP: { currentStep } } = store.getState();
      store.dispatch(setCurrentStep(currentStep + 1));
    } catch (error) {

      errorHandle(error);
    }
  },
);

