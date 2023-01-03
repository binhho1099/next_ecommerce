export interface ILoginData {
  email: string;
  password: string;
  remember: boolean;
}

export interface IRegisterData {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  phone: string;
  userId: string;
  userName: string;
}

export interface IToken {
  accessToken: string;
  accessTokenExpired: string;
  refreshToken: string;
}

export type ILoginResponse = IToken & IUser;
