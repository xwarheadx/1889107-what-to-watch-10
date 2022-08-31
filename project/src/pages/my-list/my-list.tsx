import {useEffect} from 'react';
import ListFilms from '../../components/list-films/list-films';
import {UserAuthorization} from '../../components/user-authorization/user-authorization';
import {Footer} from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFavoriteFilmAction} from '../../store/api-action';
import {getFavoriteFilms} from '../../store/film-process/selectors';


export default function MyList() {
  const dispatch = useAppDispatch();
  const films = useAppSelector(getFavoriteFilms);
  useEffect(() => {
    dispatch(fetchFavoriteFilmAction());
  },[dispatch]);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <UserAuthorization />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ListFilms />
      </section>

      <Footer />
    </div>
  );
}

