/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { axiosBlock } from '../api/apiReducer';
// import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: '',
  },
  reducers: {

    addUser: (state, { payload }) => {
      state.user = payload.user.username;
    },

    addUserAutoLogin: (state, { payload }) => {
      state.user = payload.username;
    },

    userSignOut: state => {
      state.user = '';
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
