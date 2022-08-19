import {createReducer} from '@reduxjs/toolkit';
import {COUNT_RENDER_FILMS, AuthorizationStatus} from './const';
import {chengeGenreAction, getFilmsWithGenreAction, resetFilterGenreAction, getMoreFilms, loadFilms, requireAuthorization, setError, setDataLoadedStatus} from './action';
import {Films} from './types/film';


type InitialStateType = {
  genre: string,
  films: Films,
  filmsFilteredGenre: Films,
  isShowMoreButtonRendered: boolean,
  countRenderedFilms: number,
  filmsForRender: Films,
  authorizationStatus: AuthorizationStatus,
  error: string | null,
  isDataLoaded: boolean,
};
const initialState : InitialStateType = {
  genre: 'All genres',
  films: [],
  filmsFilteredGenre: [],
  isShowMoreButtonRendered: false,
  countRenderedFilms: COUNT_RENDER_FILMS,
  filmsForRender: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chengeGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsWithGenreAction, (state) => {
      if (state.genre === 'All genres') {
        state.filmsFilteredGenre = state.films;
      } else {
        state.filmsFilteredGenre = state.films.filter((film) => film.genre === state.genre);
      }

      const filmsCount = state.filmsFilteredGenre.length;
      state.filmsForRender = state.filmsFilteredGenre.slice(0, COUNT_RENDER_FILMS);
      if (filmsCount > COUNT_RENDER_FILMS) {
        state.isShowMoreButtonRendered = true;
      } else {
        state.isShowMoreButtonRendered = false;
      }
    })
    .addCase(getMoreFilms, (state) => {
      const newRenderedMovieCount = Math.max(state.countRenderedFilms, state.countRenderedFilms + COUNT_RENDER_FILMS);
      state.filmsForRender = state.filmsFilteredGenre.slice(0, newRenderedMovieCount);
      state.countRenderedFilms = newRenderedMovieCount;
      const filmsCount = state.filmsFilteredGenre.length;
      state.isShowMoreButtonRendered = filmsCount > state.countRenderedFilms;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filmsFilteredGenre = state.films;
      state.filmsForRender = state.films.slice(0, COUNT_RENDER_FILMS);
      state.isShowMoreButtonRendered = state.films.length > COUNT_RENDER_FILMS;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(resetFilterGenreAction, (state) => {
      state.genre = 'All genres';
    });
});

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
