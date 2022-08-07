import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../mocks/films';
import VideoPlayer from '../video-player/video-player';

type CardType = {
  item: Film;
}
export default function FilmCard ({item}: CardType): JSX.Element{
  const {src, name, id, video} = item;
  const [isFosued, setIsFocused] = useState(false);

  const focusHandler = () => {
    setIsFocused(!isFosued);
  };

  const blurHandler = () => {
    setIsFocused(!isFosued);
  };

  return(
    <article className="small-film-card catalog__films-card">
      <div onMouseOver={focusHandler} onMouseOut={blurHandler} id={`${id}`} className="small-film-card__image">
        {isFosued ? <VideoPlayer video={video} src={src}></VideoPlayer> : <img src={src} alt={name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>);
}
