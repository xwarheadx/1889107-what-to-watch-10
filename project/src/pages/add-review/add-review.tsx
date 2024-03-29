import {Link, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import CommentForm from '../../components/comment-form/comment-form';
import Logo from '../../components/logo/logo';
import {UserAuthorization} from '../../components/user-authorization/user-authorization';
import {getFilmsForRender} from '../../store/film-data/selectors';


function AddReview() {
  const films = useAppSelector(getFilmsForRender);
  const filmId = Number(useParams().id);
  const film = films.find((element) => element.id === filmId);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film?.id}`} className="breadcrumbs__link">{film?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${film?.id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <UserAuthorization />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
        </div>
      </div>
      <div className="add-review">
        <CommentForm/>
      </div>
    </section>
  );
}

export default AddReview;
