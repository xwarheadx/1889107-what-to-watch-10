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
      <button className={isButtonRendered ? 'catalog__button' : 'visually-hidden'} type="button" onClick={clickButtonHandler} >Show more</button>
    </div>
  );
}

