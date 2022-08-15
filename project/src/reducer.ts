import {createReducer} from '@reduxjs/toolkit';
import {films} from './mocks/films';
import {chengeGenreAction, getFilmsWithGenreAction, resetFilterGenreAction, getMoreFilms} from './action';
import {COUNT_RENDER_FILMS} from './const';

const startRenderFilms = films.slice(0, COUNT_RENDER_FILMS);
const initialState = {
  genre: 'All genres',
  films: films,
  filmsFilteredGenre: films,
  isShowMoreButtonRendered: films.length > COUNT_RENDER_FILMS,
  countRenderedFilms: COUNT_RENDER_FILMS,
  filmsForRender: startRenderFilms,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chengeGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsWithGenreAction, (state) => {
      if (state.genre === 'All genres') {
        state.filmsFilteredGenre = films;
      } else {
        state.filmsFilteredGenre = films.filter((film) => film.genre === state.genre);
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
      if (filmsCount > state.countRenderedFilms) {
        state.isShowMoreButtonRendered = true;
      } else {
        state.isShowMoreButtonRendered = false;
      }
    })
    .addCase(resetFilterGenreAction, (state) => {
      state.genre = 'All genres';
      state.films = films;
    });
});
