export enum AppRoute {
    Main = '/',
    MyList = '/mylist',
    SignIn = '/login',
    Film = '/films/:id',
    Films = '/films',
    AddReview = '/films/:id/review',
    Player = '/player/:id',
    }

export enum AuthorizationStatus {
      Auth = 'AUTH',
      NoAuth = 'NO_AUTH',
      Unknown = 'UNKNOWN',
    }

export enum APIRoute {
      Films = '/films',
      Login = '/login',
      Logout = '/logout',
      Comment = '/comments',
      Favorite = '/favorite',
      Promo = '/promo',
    }

export enum NameSpace{
      User = 'User',
      Data = 'Data',
      Process = 'Process',
    }

export enum ReviewTextValidation {
      MinLength = 50,
      MaxLength = 400,
    }

export const NUMBER_OF_STARS = 10;
export const TIMEOUT_SHOW_ERROR = 2000;
export const COUNT_RENDER_FILMS = 8;
export const SIMILAR_FILMS_MAX_NUMBER = 4;
export const TIME_OUT = 1000;
export const MINS_IN_HOUR = 60;
export const SECS_IN_HOUR = 3600;
export const FULL_TIME_IN_PERCENT = 100;
export const DECIMAL_PLACES = 2;
export const ID_NUMBER = 10;
export const DEFAULT_GENRE = 'All genres';
