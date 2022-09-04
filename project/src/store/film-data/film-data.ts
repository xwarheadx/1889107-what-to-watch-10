import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, COUNT_RENDER_FILMS, DEFAULT_GENRE} from '../../const';
import {FilmData} from '../../types/state';

const initialState : FilmData = {
  genre: DEFAULT_GENRE,
  films: [],
  filmsFilteredGenre: [],
  isShowMoreButtonRendered: false,
  countRenderedFilms: COUNT_RENDER_FILMS,
  filmsForRender: [],
  error: null,
};

export const filmData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeGenreAction: (state, action) => {
      state.genre = action.payload;
    },
    getFilmsWithGenreAction: (state) => {
      if (state.genre === DEFAULT_GENRE) {
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
    },
    getMoreFilms: (state) => {
      const newRenderedMovieCount = Math.max(state.countRenderedFilms, state.countRenderedFilms + COUNT_RENDER_FILMS);
      state.filmsForRender = state.filmsFilteredGenre.slice(0, newRenderedMovieCount);
      state.countRenderedFilms = newRenderedMovieCount;
      const filmsCount = state.filmsFilteredGenre.length;
      state.isShowMoreButtonRendered = filmsCount > state.countRenderedFilms;
    },
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.filmsFilteredGenre = state.films;
      state.filmsForRender = state.films.slice(0, COUNT_RENDER_FILMS);
      state.isShowMoreButtonRendered = state.films.length > COUNT_RENDER_FILMS;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetFilterGenreAction: (state) => {
      state.genre = DEFAULT_GENRE;
    },
  },
});

export const {changeGenreAction, getFilmsWithGenreAction, getMoreFilms, loadFilms, setError, resetFilterGenreAction} = filmData.actions;
