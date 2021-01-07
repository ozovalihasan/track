/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { axiosBlock } from '../api/apiReducer';
// import axios from 'axios';

const pieceSlice = createSlice({
  name: 'piece',
  initialState: {
    list: [],
    chosen: { piece: {}, takenTimes: [] },
  },
  reducers: {

    listPieces: (state, { payload }) => {
      state.list = payload;
    },

    showPiece: (state, { payload }) => {
      state.chosen.piece = payload.piece;
      state.chosen.takenTimes = payload.taken_times;
    },

    createPiece: (state, { payload }) => {
      state.list.push(payload);
    },

    updatePiece: (state, { payload }) => {
      const index = state.list.findIndex(piece => piece.id === payload.id);
      state.list[index] = payload;
    },

    destroyPiece: state => {
      const index = state.list.findIndex(piece => piece.id === state.chosen.id);
      if (index !== -1) state.list.splice(index, 1);
      state.chosen = {};
    },

    resetPiece: state => {
      state.list = [];
      state.chosen = { piece: {}, takenTimes: [] };
    },
  },

});

const { actions, reducer } = pieceSlice;

export const {
  listPieces,
  showPiece,
  createPiece,
  updatePiece,
  destroyPiece,
  resetPiece,
} = actions;

export const fetchListPieces = () => dispatch => {
  const urlAPI = '/pieces';
  axiosBlock(urlAPI, listPieces, dispatch);
};

export const fetchShowPiece = pieceId => dispatch => {
  const urlAPI = `/pieces/${pieceId}`;
  axiosBlock(urlAPI, showPiece, dispatch);
};

export const fetchCreatePiece = data => dispatch => {
  const urlAPI = '/pieces/';
  axiosBlock(urlAPI, createPiece, dispatch, true, 'post', data);
};

export const fetchUpdatePiece = (pieceId, data) => dispatch => {
  const urlAPI = `/pieces/${pieceId}`;
  axiosBlock(urlAPI, updatePiece, dispatch, true, 'patch', data);
};

export const fetchDestroyPiece = pieceId => dispatch => {
  const urlAPI = `/pieces/${pieceId}`;
  axiosBlock(urlAPI, destroyPiece, dispatch, true, 'delete');
};

export default reducer;
