import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-action';
import {getAuthorizationStatus, getUserData} from '../../store/user-process/selectors';

export function UserAuthorization () {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUserData);

  const dispatch = useAppDispatch();

  if(authorizationStatus !== AuthorizationStatus.Auth || user === null){
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link className="user-block__link" to={AppRoute.SignIn}>Sign in</Link>
        </li>
      </ul>
    );
  }

  const logoutClickHandler = () => {
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={`${AppRoute.MyList}`}>
          <div className="user-block__avatar">
            <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </Link>
      </li>
      <li className="user-block__item">
        <span className="user-block__link" onClick={logoutClickHandler}>Sign out</span>
      </li>
    </ul>
  );
}
