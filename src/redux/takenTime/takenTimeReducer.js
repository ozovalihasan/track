/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { axiosBlock } from '../api/apiReducer';

const takenTimeSlice = createSlice({
  name: 'takenTime',
  initialState: {
    list: [],
    deleteId: '',
  },
  reducers: {

    listTakenTimes: (state, { payload }) => {
      state.list = payload;
    },

    createTakenTime: (state, { payload }) => {
      state.list.unshift(payload);
    },

    destroyTakenTime: state => {
      const index = state.list.findIndex(takenTime => takenTime.id === state.deleteId);
      if (index !== -1) state.list.splice(index, 1);
      state.deleteId = '';
    },

    destroyTakenTimeId: (state, { payload }) => {
      state.deleteId = payload;
    },

  },

});

const { actions, reducer } = takenTimeSlice;

export const {
  listTakenTimes,
  createTakenTime,
  destroyTakenTime,
  destroyTakenTimeId,
} = actions;

export const fetchListTakenTimes = () => dispatch => {
  const urlAPI = '/taken_times';
  axiosBlock(urlAPI, listTakenTimes, dispatch);
};

export const fetchCreateTakenTime = data => dispatch => {
  const urlAPI = '/taken_times/';
  axiosBlock(urlAPI, createTakenTime, dispatch, true, 'post', data);
};

export const fetchDestroyTakenTime = takenTimeId => dispatch => {
  dispatch(destroyTakenTimeId(takenTimeId));
  const urlAPI = `/taken_times/${takenTimeId}`;
  axiosBlock(urlAPI, destroyTakenTime, dispatch, true, 'delete');
};

export default reducer;
