import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from './const';
import {Films} from './types/film';

export const Action = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  GET_FILMS_GENRE: 'GET_FILMS_GENRE',
  RESET_GENRE_FILTER:'RESET_GENRE_FILTER',
  GET_MORE_FILMS: 'RENDER_SHOW_MORE_BUTTON',
  LOAD_FILMS: 'LOAD_FILMS',
  REQUIRE_AUTHORIZATION: 'REQUIRE_AUTHORIZATION',
  SET_ERROR: 'SET_ERROR',
};

export const chengeGenreAction = createAction(Action.CHANGE_GENRE, (value)=> ({
  payload:value,
}));
export const getFilmsWithGenreAction = createAction(Action.GET_FILMS_GENRE);
export const resetFilterGenreAction = createAction(Action.RESET_GENRE_FILTER);
export const getMoreFilms = createAction(Action.GET_MORE_FILMS);
export const loadFilms = createAction<Films>(Action.LOAD_FILMS);
export const requireAuthorization = createAction<AuthorizationStatus>(Action.REQUIRE_AUTHORIZATION);
export const setError = createAction<string | null>(Action.SET_ERROR);
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
