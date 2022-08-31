import {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getFilmsFromServer, getIsDataLoader} from '../../store/film-process/selectors';
import {loadFilms} from '../../store/film-data/film-data';
import PrivateRoute from '../private-route/private-route';
import PageNotFound404 from '../../pages/page-not-found-404/page-not-found-404';
import AddReview from '../../pages/add-review/add-review';
import Main from '../../pages/main/main';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getIsDataLoader);
  const filmsFromServer = useAppSelector(getFilmsFromServer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadFilms(filmsFromServer));
  }, [dispatch, filmsFromServer]);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            (authorizationStatus === AuthorizationStatus.Unknown) || isDataLoaded ? (
              <LoadingScreen />
            ) : (
              <Main />
            )
          }
        />
        <Route
          path={AppRoute.Film}
          element = {<MoviePage />}
        />
        <Route
          path={AppRoute.AddReview}
          element = {
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.MyList}
          element ={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element = {<Player />}
        />
        <Route
          path={AppRoute.SignIn}
          element = {<SignIn />}
        />

        <Route path='*'
          element={<PageNotFound404 />}
        >
        </Route>
      </Routes>
    </HistoryRouter>
  );
}
