import React, {FormEvent, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {Footer} from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import PageNotFound404 from '../page-not-found-404/page-not-found-404';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-action';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {AuthData} from '../../types/auth-data';

function SignIn () {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  useEffect(() => {
    authorizationStatus === AuthorizationStatus.Auth && navigate(AppRoute.Main);
  }, [authorizationStatus, navigate]);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };
  const regularLogin = /\w+@\w+\.\w+/;
  const regularPassword = /(?=.*[a-zа-яA-ZА-Я])(?=.*[0-9])/;

  function validateLogin (evt: React.ChangeEvent<HTMLInputElement>) {
    if (regularLogin.test(evt.target.value)) {
      evt.target.setCustomValidity('');
    } else {
      evt.target.setCustomValidity('Введите корректный e-mail. Пример: sergey1@mail.ru');
    }
  }

  function validatePassword (evt: React.ChangeEvent<HTMLInputElement>) {
    if (regularPassword.test(evt.target.value)) {
      evt.target.setCustomValidity('');
    } else {
      evt.target.setCustomValidity('Пароль должен содержать одну букву и цифру');
    }
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null && regularLogin.test(loginRef.current.value) && regularPassword.test(passwordRef.current.value)) {
      onSubmit({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      });
      navigate(AppRoute.Main);
    }
  };

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  return (
    authorizationStatus === AuthorizationStatus.Auth ?
      <PageNotFound404 /> :
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form onSubmit={handleSubmit} action="#" className="sign-in__form">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input ref={loginRef} onInput={validateLogin} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input ref={passwordRef} onInput={validatePassword} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
  );
}

export default SignIn;
