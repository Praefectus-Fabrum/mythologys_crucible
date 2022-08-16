/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import initialState from 'store/initialState';

export const SESSION_LOGOUT = 'session/clear';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState.session,
  reducers: {
    init: (state) => {
      state.user = {};
      state.authenticated = false;
      state.checked = false;
      state.error = '';
    },
    error: (state, action) => {
      state.user = {};
      state.authenticated = false;
      state.checked = true;
      state.error = action.payload || '';
    },
    clearError: (state) => {
      state.error = '';
    },
    success: (state, action) => {
      state.user = action.payload;
      state.authenticated = true;
      state.checked = true;
      state.error = '';
    },
    clear: (state) => {
      state.user = {};
      state.authenticated = false;
      state.checked = true;
      state.error = '';
    },
  },
});

export const sessionActions = sessionSlice.actions;

export default sessionSlice.reducer;
