import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {ListFilmsType} from '../../types/film';


export default function ListFilms ({films}: ListFilmsType): JSX.Element{

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
    <div onMouseOver={mouseOverHandler}
      className='catalog__films-list'
    >
      {films.map((film) => <FilmCard item={film} key={film.src}></FilmCard>)}
    </div>
  );
}

