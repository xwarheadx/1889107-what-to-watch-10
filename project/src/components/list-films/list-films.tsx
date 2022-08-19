import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {ShowMoreButton} from '../show-more-button/show-more-button';
import {useAppSelector} from '../../hooks';


export default function ListFilms (): JSX.Element{

  const films = useAppSelector((state) => state.filmsForRender);
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
      <ShowMoreButton />
    </>
  );
}

