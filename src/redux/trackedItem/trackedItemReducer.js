/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const trackedItemSlice = createSlice({
  name: 'trackedItem',
  initialState: {
    loading: false,
    trackedItems: [],
    error: '',
  },
  reducers: {

    trackedItemRequest: state => {
      state.loading = true;
    },

    trackedItemFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    addAllTrackedItem: (state, { payload }) => {
      state.loading = false;
      state.trackedItems = payload
      state.error = '';
    },

  },

});

const { actions, reducer } = trackedItemSlice;

export const {
  trackedItemsRequest,
  trackedItemsFailure,
  addAllTrackedItem,
} = actions;

export const axiosBlock = (urlAPI, usedDispatch, dispatch) => {
  dispatch(trackedItemRequest());
  axios(urlAPI)
    .then(response => {
      if (response.status.toString()[0] !== '2') {
        throw response.status;
      }
      dispatch(usedDispatch(response.data));
    })
    .catch(error => {
      dispatch(trackedItemFailure(error));
    });
};

const REACT_APP_SERVER_URL = 'http://127.0.0.1:3000';

export const fetchTrackedItemList = () => dispatch => {
  const urlAPI = `${REACT_APP_SERVER_URL}/trackedItems`;
  axiosBlock(urlAPI, addAllTrackedItem, dispatch);
};


export default reducer;
