import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getFilmsWithGenreAction, resetFilterGenreAction} from '../../action';
import {useAppDisptach} from '../../hooks';
type LogoProps = {
    isLinkLight?: boolean,
  }
export default function Logo({
  isLinkLight = false,
}: LogoProps): JSX.Element {
  const linkLight: string = isLinkLight ? ' logo__link--light' : '';
  const disptch = useAppDisptach();
  const clickHandler = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    disptch(resetFilterGenreAction());
    disptch(getFilmsWithGenreAction());
  };
  return (
    <div onClick={clickHandler} className="logo">
      <Link className={`logo__link${linkLight}`} to={AppRoute.Main}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
