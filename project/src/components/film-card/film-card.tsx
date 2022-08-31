import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Film} from '../../types/film';
import VideoPlayer from '../video-player/video-player';
import {AppRoute} from '../../const';

type CardType = {
  item: Film;
}
export default function FilmCard ({item}: CardType): JSX.Element{
  const {previewImage, name, id, previewVideoLink} = item;
  const navigate = useNavigate();
  const [isFosued, setIsFocused] = useState(false);

  const focusAndBlurHandler = () => {
    setIsFocused(!isFosued);
  };

  const clickHandler = () => {
    navigate(`${AppRoute.Films}/${id}`);
  };

  return(
    <article className="small-film-card catalog__films-card">
      <div id={`${id}`} className="small-film-card__image" onClick={clickHandler} onMouseOver={focusAndBlurHandler} onMouseOut={focusAndBlurHandler}>
        {isFosued ? <VideoPlayer video={previewVideoLink} /> : <img src={previewImage} alt={name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>);
}
