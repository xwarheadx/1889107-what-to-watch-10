import {memo} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getFilmsWithGenreAction, resetFilterGenreAction} from '../../store/film-data/film-data';
import {useAppDispatch} from '../../hooks';

function Logo() {
  const dispatch = useAppDispatch();
  const clickHandler = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    dispatch(resetFilterGenreAction());
    dispatch(getFilmsWithGenreAction());
  };

  return (
    <div className="logo" onClick={clickHandler}>
      <Link to={AppRoute.Main} className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default memo(Logo);
