export enum AppRoutes {
  Root = '/',
  SignIn = '/signin',
  SignUp = '/signup',
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
export enum APIRoute {
  User = 'fit/new-user?site_id=1'
}
export const steps = ['Контакты', 'Параметры', 'Предпочтения', 'Платежи', 'Готово!'];
