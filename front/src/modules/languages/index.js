/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import languages from 'languages';
import { getBrowserLanguage } from 'utils/language';

const USER_LANG = getBrowserLanguage();

const INITIAL_LANG_CONF = {
  language: USER_LANG,
  literals: languages[USER_LANG],
};

export const languagesSlice = createSlice({
  name: 'language',
  initialState: INITIAL_LANG_CONF,
  reducers: {
    set: (state, { payload: lang }) => {
      state.language = lang;
      state.literals = languages[lang];
    },
  },
});

export const languagesActions = languagesSlice.actions;

export default languagesSlice.reducer;
