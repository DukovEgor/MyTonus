import { createAsyncThunk } from '@reduxjs/toolkit';
import { FieldValues } from 'react-hook-form';
import { api, store } from '.';
import { errorHandle } from '../components/services/error-handle';
import { saveToken } from '../components/services/token';
import { AuthData } from '../types/api';
import { APIRoute, AuthorizationStatus } from '../utils/conts';
import { setCurrentStep } from './app-process';
import { requireAuthorization, setUserData } from './user-process';

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

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {

      const { data } = await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(setUserData(data));

    } catch (error) {

      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {

      const { data } = await api.post(APIRoute.Login, { email, password });
      saveToken(data.token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(setUserData(data));

    } catch (error) {

      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);
