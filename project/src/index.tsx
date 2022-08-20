import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import {store} from './store';
import {checkAuthAction, fetchFilmsAction} from './store/api-action';


const Setting = {
  MAIN_FILM_NAME: 'The Grand Budapest Hotel',
  MAIN_FILM_GENRE: 'Drama',
  MAIN_FILM_DATE: 2014,
};

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App mainFilmName = {Setting.MAIN_FILM_NAME} mainFilmGenre = {Setting.MAIN_FILM_GENRE} mainFilmDate = {Setting.MAIN_FILM_DATE}/>
    </Provider>
  </React.StrictMode>,
);
