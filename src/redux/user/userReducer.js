/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    users: [],
    error: '',
  },
  reducers: {

    userRequest: state => {
      state.loading = true;
    },

    userFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    addAllUser: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
      state.error = '';
    },

  },

});

const { actions, reducer } = userSlice;

export const {
  userRequest,
  userFailure,
  addAllUser,
} = actions;

export const axiosBlock = (urlAPI, usedDispatch, dispatch) => {
  dispatch(userRequest());
  axios(urlAPI)
    .then(response => {
      if (response.status.toString()[0] !== '2') {
        throw response.status;
      }
      dispatch(usedDispatch(response.data));
    })
    .catch(error => {
      dispatch(userFailure(error));
    });
};

const REACT_APP_SERVER_URL = 'http://127.0.0.1:3000';

export const fetchUserList = () => dispatch => {
  const urlAPI = `${REACT_APP_SERVER_URL}/users`;
  axiosBlock(urlAPI, addAllUser, dispatch);
};

export default reducer;
