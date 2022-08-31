import {getMoreFilms} from '../../store/film-data/film-data';
import {getIsRenderShowMoreButton} from '../../store/film-data/selectors';
import {useAppDispatch, useAppSelector} from '../../hooks';

type ShowMoreType = {
  isMyListPage: boolean;
};

export function ShowMoreButton ({isMyListPage}: ShowMoreType) {
  const isButtonRendered = useAppSelector(getIsRenderShowMoreButton);
  const dispatch = useAppDispatch();
  const clickButtonHandler = () => {
    dispatch(getMoreFilms());
  };
  return (
    <div className="catalog__more">
      {isButtonRendered && (<button className={isButtonRendered ? 'catalog__button' : 'visually-hidden'} type="button" onClick={clickButtonHandler}>Show more</button>)}
    </div>
  );
}

