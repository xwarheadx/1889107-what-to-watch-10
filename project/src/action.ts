import {createAction} from '@reduxjs/toolkit';

export const Action = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  GET_FILMS_GENRE: 'GET_FILMS_GENRE',
  RESET_GENRE_FILTER:'RESET_GENRE_FILTER',
  GET_MORE_FILMS: 'RENDER_SHOW_MORE_BUTTON',
};

export const chengeGenreAction = createAction(Action.CHANGE_GENRE, (value)=> ({
  payload:value,
}));
export const getFilmsWithGenreAction = createAction(Action.GET_FILMS_GENRE);
export const resetFilterGenreAction = createAction(Action.RESET_GENRE_FILTER);
export const getMoreFilms = createAction(Action.GET_MORE_FILMS);
