export enum AppRoutes {
  Root = '/',
  SignIn = '/signin',
  SignUp = '/signup',
  Cabinet = '/cabinet',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  ERR_FAILED = 301,
}

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
  app = 'APP',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  User = 'fit/new-user?site_id=1',
  Login = 'fit/new-user',
}

export const steps = ['Контакты', 'Параметры', 'Предпочтения', 'Готовим результат', 'Готово!'];
