import {Link} from 'react-router-dom';
import {Film} from '../../mocks/films';

type CardType = {
  item: Film;
}
export default function FilmCard ({item}: CardType): JSX.Element{
  const {src, name, id} = item;

  return(
    <article className="small-film-card catalog__films-card">
      <div id={`${id}`} className="small-film-card__image">
        <img src={src} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>);
}
