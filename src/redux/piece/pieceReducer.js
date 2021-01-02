/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const pieceSlice = createSlice({
  name: 'piece',
  initialState: {
    loading: false,
    pieces: [],
    error: '',
  },
  reducers: {

    pieceRequest: state => {
      state.loading = true;
    },

    pieceFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    addAllPieces: (state, { payload }) => {
      state.loading = false;
      state.pieces = payload;
      state.error = '';
    },

  },

});

const { actions, reducer } = pieceSlice;

export const {
  pieceRequest,
  pieceFailure,
  addAllPieces,
} = actions;

export const axiosBlock = (urlAPI, usedDispatch, dispatch) => {
  dispatch(pieceRequest());
  axios(urlAPI)
    .then(response => {
      if (response.status.toString()[0] !== '2') {
        throw response.status;
      }
      dispatch(usedDispatch(response.data));
    })
    .catch(error => {
      dispatch(pieceFailure(error));
    });
};

const REACT_APP_SERVER_URL = 'http://127.0.0.1:3000';

export const fetchPiecesList = () => dispatch => {
  const urlAPI = `${REACT_APP_SERVER_URL}/pieces`;
  axiosBlock(urlAPI, addAllPieces, dispatch);
};

export default reducer;
