import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import {isCheckedAuth} from '../../reducer';
import PrivateRoute from '../private-route/private-route';
import FilterGenres from '../filter-genres/filter-genres';
import PageNotFound404 from '../../pages/page-not-found-404/page-not-found-404';
import AddReview from '../../pages/add-review/add-review';
import Main from '../../pages/main/main';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type AppProps = {
  mainFilmName: string;
  mainFilmGenre: string;
  mainFilmDate: number;
}

export default function App({mainFilmName, mainFilmGenre, mainFilmDate}: AppProps): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element = {
            <Main mainFilmName = {mainFilmName} mainFilmGenre = {mainFilmGenre} mainFilmDate = {mainFilmDate}/>
          }
        />
        <Route
          path='/:id'
          element = {<FilterGenres/>}
        />
        <Route
          path={AppRoute.Film}
          element = {<MoviePage />}
        />
        <Route
          path={AppRoute.AddReview}
          element = {<AddReview />}
        />
        <Route
          path={AppRoute.MyList}
          element = {
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
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
    </BrowserRouter>
  );
}
