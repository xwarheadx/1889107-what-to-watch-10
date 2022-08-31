import {SIMILAR_FILMS_MAX_NUMBER} from '../../const';
import {useAppSelector} from '../../hooks';
import {getSimilarFilms} from '../../store/film-process/selectors';
import FilmCard from '../film-card/film-card';


export function MoreLikeThisFilms () {
  const similarFilms = useAppSelector(getSimilarFilms);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {similarFilms.slice(0,SIMILAR_FILMS_MAX_NUMBER).map((film) => <FilmCard item={film} key={film.posterImage} />)}
      </div>
    </section>
  );
}

