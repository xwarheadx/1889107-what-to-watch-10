import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppDispatch} from '../../hooks';
import {getFilmsWithGenreAction, resetFilterGenreAction} from '../../store/film-data/film-data';

export function Footer() {
  const dispatch = useAppDispatch();
  const clickHandler = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    dispatch(resetFilterGenreAction());
    dispatch(getFilmsWithGenreAction());
  };
  return (
    <footer className="page-footer">
      <div className="logo" onClick={clickHandler}>
        <Link to={AppRoute.Main} className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

