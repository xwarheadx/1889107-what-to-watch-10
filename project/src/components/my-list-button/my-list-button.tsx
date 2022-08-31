import {memo, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchChangeStatusFavoriteFilmAction, fetchFavoriteFilmAction} from '../../store/api-action';
import {getAloneFilmFromServer, getDisableButton, getFavoriteFilms, getPromoFilm} from '../../store/film-process/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

function MyListButton () {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getAloneFilmFromServer);
  const isDisabled = useAppSelector(getDisableButton);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const promoFilm = useAppSelector(getPromoFilm);
  const navigate = useNavigate();

  const isMoviePage = useLocation().pathname === `${AppRoute.Films}/${film.id}`;
  function isFavorite () {
    if (isMoviePage) {
      if (film.isFavorite) {
        return '#in-list';
      } else {
        return '#add';
      }
    } else {
      if (promoFilm.isFavorite) {
        return '#in-list';
      } else {
        return '#add';
      }

    }
  }

  useEffect(() => {
    authorizationStatus === AuthorizationStatus.Auth && dispatch(fetchFavoriteFilmAction());
  },[authorizationStatus, dispatch]);
  const filmsFavorite = useAppSelector(getFavoriteFilms);

  const clickHandler = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.SignIn);
      return;
    }
    if (isMoviePage) {
      dispatch(fetchChangeStatusFavoriteFilmAction({filmId: Number(film.id), status: Number(!film.isFavorite), promoId: -1}));
    } else {
      dispatch(fetchChangeStatusFavoriteFilmAction({filmId: Number(promoFilm.id), status: Number(!promoFilm.isFavorite), promoId: promoFilm.id}));
    }
  };


  return(
    <button className="btn btn--list film-card__button" type="button" disabled={isDisabled && authorizationStatus === AuthorizationStatus.Auth} onClick={clickHandler}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite()}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{filmsFavorite.length}</span>
    </button>
  );
}

export default memo(MyListButton);
