export enum AppRoute {
    Main = '/',
    MyList = '/mylist',
    SignIn = '/login',
    Film = '/films/:id',
    AddReview = '/films/:id/review',
    Player = '/player/:id',
    }

export enum AuthorizationStatus {
      Auth = 'AUTH',
      NoAuth = 'NO_AUTH',
      Unknown = 'UNKNOWN',
    }
export const COUNT_RENDER_FILMS = 8;

export enum APIRoute {
    Films = '/films',
    Login = '/login',
    Logout = '/logout',
  }

export const TIMEOUT_SHOW_ERROR = 3000;
