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

  },

});

const { actions, reducer } = apiSlice;

const {
  apiRequest,
  apiSuccess,
  apiFailure,
} = actions;

const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5fQ.ZTvJB-ze30pdpLpxPg86I6oU4_ybpEPfMLndUflpYoE';
const REACT_APP_SERVER_URL = 'http://127.0.0.1:4000';

export const axiosBlock = (pathAPI, usedDispatch, dispatch, headers = true, method = 'get', data = {}) => {
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
