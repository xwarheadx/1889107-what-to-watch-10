import {SIMILAR_FILMS_MAX_NUMBER} from '../../const';
import {useAppSelector} from '../../hooks';
import {getSimilarFilms} from '../../store/film-process/selectors';
import FilmCard from '../film-card/film-card';


export function MoreLikeThis () {
  const similarFilms = useAppSelector(getSimilarFilms);
  const showedSimilarFilms = similarFilms.slice(0, SIMILAR_FILMS_MAX_NUMBER);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {similarFilms.length === 0
          ? <div>There are no similar films...</div>
          : showedSimilarFilms.map((film) => <FilmCard item={film} key={film.posterImage} />)}
      </div>
    </section>
  );
}

