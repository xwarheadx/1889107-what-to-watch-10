import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute} from '../const';
import {dropToken, saveToken} from '../service/token';
import {AuthData} from '../types/auth-data';
import {FavoriteFilmType, Film, Films, ResponseComments} from '../types/film';
import {AppDispatch, State} from '../types/state';
import {UserComment, UserData} from '../types/user-data';
import {redirectToRoute} from '../action';

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    return data;
  },
);

export const fetchAloneFilmAction = createAsyncThunk<Film, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchAloneFilm',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
    return data;
  },
);

export const fetchSimilarFilmAction = createAsyncThunk<Films, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchSimilarFilm',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
    return data;
  },
);

export const fetchFavoriteFilmAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFavoriteFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(`${APIRoute.Favorite}`);
    return data;
  },
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Promo}`);
    return data;
  },
);

export const fetchChangeStatusFavoriteFilmAction = createAsyncThunk<Film, FavoriteFilmType, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchChangeStatusFavoriteFilm',
  async ({filmId, status, promoId}, {dispatch, extra: api}) => {
    const {data} = await api.post<Film>(`${APIRoute.Favorite}/${filmId}/${status}`);
    dispatch(fetchFavoriteFilmAction());
    if (promoId === filmId) {
      dispatch(fetchPromoFilmAction());
    }
    return data;
  },
);

export const addComment = createAsyncThunk<ResponseComments, UserComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'postComment',
  async ({comment, rating, id}, {dispatch, extra: api}) => {
    const {data} = await api.post<ResponseComments>(`${APIRoute.Comment}/${id}`, {comment, rating});
    dispatch(redirectToRoute(`/films/${id}`));
    return data;
  },
);

export const fetchComments = createAsyncThunk<ResponseComments, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchComments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<ResponseComments>(`${APIRoute.Comment}/${id}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'checkAuth',
  async (_args, {dispatch, extra: api}) => {
    const userData = (await api.get(APIRoute.Login)).data;

    return userData;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async (_args, {dispatch, extra: api}) => {
    const userData = (await api.post<UserData>(APIRoute.Login, {email: _args.email, password: _args.password})).data;
    if(userData){
      saveToken(userData.token);
      dispatch(redirectToRoute(AppRoute.Main));
    }

    return userData;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(redirectToRoute(AppRoute.Main));
  },
);
