import {createAsyncThunk} from '@reduxjs/toolkit';
import {TIMEOUT_SHOW_ERROR} from '../const';
import {store} from '../store';
import {setError} from '../store/film-data/film-data';

const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
