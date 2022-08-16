import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {chengeGenreAction, getFilmsWithGenreAction} from '../../action';
import {useAppDisptach} from '../../hooks';
import ListFilms from '../list-films/list-films';

function FilterGenres () {

  const [elementLi, setElementLi] = useState('All genres');
  const dispatch = useAppDisptach();

  const clickHandler = (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    const dataAttribute = evt.currentTarget.getAttribute('data-genre');
    setElementLi(String());
    dispatch(chengeGenreAction(String(dataAttribute)));
    dispatch(getFilmsWithGenreAction());
  };

  return (
    <>
      <ul className="catalog__genres-list">
        <li data-genre='All genres' className={elementLi === 'All genres' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler}>
          <Link to="/" className="catalog__genres-link">All genres</Link>
        </li>
        <li data-genre='Comedies' className={elementLi === 'Comedies' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler}>
          <Link to="/" className="catalog__genres-link">Comedies</Link>
        </li>
        <li data-genre='Crime' className={elementLi === 'Crime' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler}>
          <Link to="/" className="catalog__genres-link">Crime</Link>
        </li>
        <li data-genre='Documentary' className={elementLi === 'Documentary' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler}>
          <Link to="/" className="catalog__genres-link">Documentary</Link>
        </li>
        <li data-genre='Dramas' className={elementLi === 'Dramas' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler} >
          <Link to="/" className="catalog__genres-link">Dramas</Link>
        </li>
        <li data-genre='Horror' className={elementLi === 'Horror' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler}>
          <Link to="/" className="catalog__genres-link">Horror</Link>
        </li>
        <li data-genre='Kids & Family' className={elementLi === 'Kids & Family' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler}>
          <Link to="/" className="catalog__genres-link">Kids & Family</Link>
        </li>
        <li data-genre='Romance' className={elementLi === 'Romance' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler}>
          <Link to="/" className="catalog__genres-link">Romance</Link>
        </li>
        <li data-genre='Sci-Fi' className={elementLi === 'Sci-Fi' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler}>
          <Link to="/" className="catalog__genres-link">Sci-Fi</Link>
        </li>
        <li data-genre='Thrillers' className={elementLi === 'Thrillers' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler}>
          <Link to="/" className="catalog__genres-link">Thrillers</Link>
        </li>
      </ul>
      <ListFilms />
    </>
  );
}

export default FilterGenres;
