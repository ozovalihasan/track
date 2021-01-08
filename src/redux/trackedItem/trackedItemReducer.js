/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { axiosBlock } from '../api/apiReducer';
// import axios from 'axios';

const trackedItemSlice = createSlice({
  name: 'trackedItem',
  initialState: {
    list: [],
    chosen: { trackedItem: {}, pieces: [] },
  },
  reducers: {

    listTrackedItems: (state, { payload }) => {
      state.list = payload;
    },

    showTrackedItem: (state, { payload }) => {
      state.chosen.trackedItem = payload.tracked_item;
      state.chosen.pieces = payload.pieces;
    },

    createTrackedItem: (state, { payload }) => {
      state.list.push(payload);
    },

    updateTrackedItem: (state, { payload }) => {
      const index = state.list.findIndex(trackedItem => trackedItem.id === payload.id);
      state.list[index] = payload;
    },

    destroyTrackedItem: state => {
      const index = state.list.findIndex(trackedItem => trackedItem.id === state.chosen.id);
      if (index !== -1) state.list.splice(index, 1);
      state.chosen = { trackedItem: {}, pieces: [] };
    },

    showAllTrackedItems: state => {
      state.chosen = { trackedItem: {}, pieces: [] };
    },

    resetTrackedItem: state => {
      state.list = [];
      state.chosen = { trackedItem: {}, pieces: [] };
    },

  },

});

const { actions, reducer } = trackedItemSlice;

export const {
  listTrackedItems,
  showTrackedItem,
  createTrackedItem,
  updateTrackedItem,
  destroyTrackedItem,
  showAllTrackedItems,
  resetTrackedItem,
} = actions;

export const fetchListTrackedItems = () => dispatch => {
  const urlAPI = '/tracked_items';
  axiosBlock(urlAPI, listTrackedItems, dispatch);
};

export const fetchShowTrackedItem = trackedItemId => dispatch => {
  const urlAPI = `/tracked_items/${trackedItemId}`;
  axiosBlock(urlAPI, showTrackedItem, dispatch);
};

export const fetchCreateTrackedItem = data => dispatch => {
  const urlAPI = '/tracked_items/';
  axiosBlock(urlAPI, createTrackedItem, dispatch, true, 'post', data);
};

export const fetchUpdateTrackedItem = (trackedItemId, data) => dispatch => {
  const urlAPI = `/tracked_items/${trackedItemId}`;
  axiosBlock(urlAPI, updateTrackedItem, dispatch, true, 'patch', data);
};

export const fetchDestroyTrackedItem = trackedItemId => dispatch => {
  const urlAPI = `/tracked_items/${trackedItemId}`;
  axiosBlock(urlAPI, destroyTrackedItem, dispatch, true, 'delete');
};

export default reducer;
