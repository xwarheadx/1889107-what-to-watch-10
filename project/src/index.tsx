import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';
import {store} from './store';

const Setting = {
  MAIN_FILM_NAME: 'The Grand Budapest Hotel',
  MAIN_FILM_GENRE: 'Drama',
  MAIN_FILM_DATE: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App mainFilmName = {Setting.MAIN_FILM_NAME} mainFilmGenre = {Setting.MAIN_FILM_GENRE} mainFilmDate = {Setting.MAIN_FILM_DATE} films = {films}/>
    </Provider>
  </React.StrictMode>,
);
