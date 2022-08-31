import React from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenreAction, getFilmsWithGenreAction} from '../../store/film-data/film-data';
import {getGenreAction} from '../../store/film-data/selectors';
import ListFilms from '../list-films/list-films';

export default function FilterGenres () {

  const elementLi = useAppSelector(getGenreAction);
  const dispatch = useAppDispatch();

  const clickHandler = (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    const dataAttribute = evt.currentTarget.getAttribute('data-genre');
    dispatch(changeGenreAction(String(dataAttribute)));
    dispatch(getFilmsWithGenreAction());
  };

  return (
    <>
      <ul className="catalog__genres-list">
        <li data-genre='All genres' className={elementLi === 'All genres' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler} >
          <Link to="/" className="catalog__genres-link">All genres</Link>
        </li>
        <li data-genre='Comedy' className={elementLi === 'Comedy' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler}>
          <Link to="/" className="catalog__genres-link">Comedies</Link>
        </li>
        <li data-genre='Crime' className={elementLi === 'Crime' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler}>
          <Link to="/" className="catalog__genres-link">Crime</Link>
        </li>
        <li data-genre='Adventure' className={elementLi === 'Adventure' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler}>
          <Link to="/" className="catalog__genres-link">Adventures</Link>
        </li>
        <li data-genre='Drama' className={elementLi === 'Drama' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler}>
          <Link to="/" className="catalog__genres-link">Dramas</Link>
        </li>
        <li data-genre='Action' className={elementLi === 'Action' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler}>
          <Link to="/" className="catalog__genres-link">Action</Link>
        </li>
        <li data-genre='Fantasy' className={elementLi === 'Fantasy' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler} >
          <Link to="/" className="catalog__genres-link">Fantasy</Link>
        </li>
        <li data-genre='Thriller' className={elementLi === 'Thriller' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={clickHandler} >
          <Link to="/" className="catalog__genres-link">Thrillers</Link>
        </li>
      </ul>
      <ListFilms />
    </>
  );
}

