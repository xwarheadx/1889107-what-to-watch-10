import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';
import FilmCard from '../film-card/film-card';
import {ShowMoreButton} from '../show-more-button/show-more-button';
import {getFilmsForRender} from '../../store/film-data/selectors';
import {getFavoriteFilms} from '../../store/film-process/selectors';
import {useAppSelector} from '../../hooks';

export default function ListFilms (): JSX.Element{
  const filmsFavorite = useAppSelector(getFavoriteFilms);
  const allFilms = useAppSelector(getFilmsForRender);
  let films;
  if (useLocation().pathname === AppRoute.MyList) {
    films = filmsFavorite;
  } else {
    films = allFilms;
  }

  const [activeId, setActiveId] = useState({
    id: '',
  });

  const mouseOverHandler = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLDivElement;
    setActiveId({
      ...activeId,
      id: target.id,
    });
  };

  return (
    <>
      <div className='catalog__films-list' onMouseOver={mouseOverHandler}>
        {films.map((film) => <FilmCard item={film} key={film.id} />)}
      </div>
      <ShowMoreButton isMyListPage={films === filmsFavorite}/>
    </>
  );
}


