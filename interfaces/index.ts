export interface ILoginData {
  username: string;
  password: string;
  remember: boolean;
}

export interface IRegisterData {
  email: string;
  password: string;
}

export interface IUser {
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface IToken {
  accessToken: string;
  accessTokenExpired: string;
  refreshToken: string;
}

export type ILoginResponse = IToken & IUser;
