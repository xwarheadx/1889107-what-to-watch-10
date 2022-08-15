import {getMoreFilms} from '../../action';
import {useAppDisptach, useAppSelector} from '../../hooks';

export function ShowMoreButton () {
  const isButtonRendered = useAppSelector((state) => state.isShowMoreButtonRendered);
  const dispatch = useAppDisptach();

  const clickButtonHandler = () => {
    dispatch(getMoreFilms());
  };
  return (
    <div className="catalog__more">
      <button onClick={clickButtonHandler} className={isButtonRendered ? 'catalog__button' : 'visually-hidden'} type="button">Show more</button>
    </div>
  );
}

