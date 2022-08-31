import {memo} from 'react';
import {UserAuthorization} from '../user-authorization/user-authorization';
import Logo from '../logo/logo';

function Header () {
  return(
    <header className="page-header film-card__head">
      <Logo />
      <UserAuthorization />
    </header>);
}

export default memo(Header, (prevProps, nextProps) => prevProps === nextProps);
