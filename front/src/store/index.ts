/* eslint-disable no-param-reassign */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import session, { SESSION_LOGOUT } from '../modules/session';
import languages from '../modules/languages';
import loading from '../modules/loading';
import initialState from './initialState';

const combinedReducer = combineReducers({
  session,
  languages,
  loading,
});

const rootReducer = (state:any, action:any) => {
  if (action.type === SESSION_LOGOUT) {
    state = {
      ...initialState,
      session: {
        ...initialState.session,
        checked: true,
      },
    };
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});