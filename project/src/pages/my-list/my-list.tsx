import ListFilms from '../../components/list-films/list-films';
import UserAuthorization from '../../components/user-authorization/user-authorization';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';

export default function MyList() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
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

