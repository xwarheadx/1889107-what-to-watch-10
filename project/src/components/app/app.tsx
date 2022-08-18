import {Route, BrowserRouter, Routes} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../const';
import FilterGenres from '../filter-genres/filter-genres';
import PageNotFound404 from '../../pages/page-not-found-404/page-not-found-404';
import AddReview from '../../pages/add-review/add-review';
import Main from '../../pages/main/main';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import {Films} from '../../types/film';

type AppProps = {
  mainFilmName: string;
  mainFilmGenre: string;
  mainFilmDate: number;
  films: Films;
}

export default function App({mainFilmName, mainFilmGenre, mainFilmDate, films}: AppProps): JSX.Element {
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
          element = {<MoviePage films={films}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element = {<AddReview films={films}/>}
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
          element = {<Player films={films}/>}
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
