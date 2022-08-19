import {setError} from '../action';
import {store} from '../store';
import {clearErrorAction} from '../store/api-action';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
