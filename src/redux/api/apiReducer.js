/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    loading: false,
    error: '',
  },
  reducers: {

    apiRequest: state => {
      state.loading = true;
    },

    apiSuccess: state => {
      state.loading = false;
      state.error = '';
    },
    apiFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    resetApi: state => {
      state.loading = false;
      state.error = '';
    },

  },

});

const { actions, reducer } = apiSlice;

export const {
  apiRequest,
  apiSuccess,
  apiFailure,
  resetApi,
} = actions;

const REACT_APP_SERVER_URL = 'https://dr-ti-api.fly.dev/';

export const axiosBlock = (pathAPI, usedDispatch, dispatch, headers = true, method = 'get', data = {}) => {
  const JWT_TOKEN = localStorage.token;
  dispatch(apiRequest());
  axios({
    method,
    url: `${REACT_APP_SERVER_URL}${pathAPI}`,
    headers:
      headers ? {
        'Content-Type': 'application/json',
        Authorization: `bearer ${JWT_TOKEN}`,
      } : {
      },
    data,
  })
    .then(response => {
      if (response.status.toString()[0] !== '2') {
        throw response.status;
      }
      dispatch(apiSuccess());
      dispatch(usedDispatch(response.data));
    })
    .catch(error => {
      dispatch(apiFailure(error));
    });
};
export default reducer;
