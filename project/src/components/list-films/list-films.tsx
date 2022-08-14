import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {useAppSelector} from '../../hooks';


export default function ListFilms (): JSX.Element{

  const films = useAppSelector((state) => state.films);
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

