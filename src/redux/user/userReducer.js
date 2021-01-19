/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { axiosBlock } from '../api/apiReducer';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
  },
  reducers: {

    addUser: {
      reducer: (state, { payload }) => {
        state.username = payload.user.username;
      },
      prepare: response => {
        localStorage.token = response.token;
        return { payload: response };
      },
    },

    addUserAutoLogin: (state, { payload }) => {
      state.username = payload.username;
    },

    userSignOut: state => {
      state.username = '';
    },

  },

});

const { actions, reducer } = userSlice;

export const {
  addUser,
  addUserAutoLogin,
  userSignOut,
} = actions;

export const fetchUserCreate = (username, password) => dispatch => {
  const pathAPI = '/users';
  const data = { username, password };
  axiosBlock(pathAPI, addUser, dispatch, false, 'post', data);
};

export const fetchUserLogin = (username, password) => dispatch => {
  const pathAPI = '/login';
  const data = { username, password };
  axiosBlock(pathAPI, addUser, dispatch, false, 'post', data);
};

export const fetchUserAutoLogin = () => dispatch => {
  const pathAPI = '/auto_login';
  axiosBlock(pathAPI, addUserAutoLogin, dispatch);
};

export default reducer;
