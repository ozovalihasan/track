/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    showList: false,
  },
  reducers: {
    showTrackedItems: state => {
      state.showList = true;
    },

    hideTrackedItems: state => {
      state.showList = false;
    },

    resetApp: state => {
      state.showList = false;
    },
  },

});

const { actions, reducer } = appSlice;

export const {
  showTrackedItems,
  hideTrackedItems,
  resetApp,
} = actions;

export default reducer;
