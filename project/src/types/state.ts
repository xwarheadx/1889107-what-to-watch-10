import {AuthorizationStatus} from '../const';
import {store} from '../store';
import {Film, Films, ResponseComments} from './film';
import {UserData} from './user-data.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userData : UserData,
};

export type FilmData = {
  genre: string;
  films: Films;
  filmsFilteredGenre: Films;
  isShowMoreButtonRendered: boolean;
  countRenderedFilms: number;
  filmsForRender: Films;
  error: string | null;
};

export type FilmProcess = {
  films: Films;
  isDataLoaded: boolean;
  film: Film;
  similarFilms: Films;
  favoriteFilms: Films;
  comments: ResponseComments;
  disableButton: boolean;
  promoFilm: Film;
};
