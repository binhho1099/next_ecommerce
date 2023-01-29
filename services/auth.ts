import { AxiosPromise } from 'axios';
import { ILoginData, IRegisterData, IToken } from 'interfaces';
import { Axios } from 'utils/axios';
import { Cookie } from 'utils/cookie';

class AuthService {
  isLogined: boolean = false;

  // async login(data: ILoginData): Promise<AxiosPromise> {
  //   try {
  //     const res = await Axios.post(AUTH_ENDPOINT.LOGIN, data);
  //     this.isLogined = true;

  //     if (res.data.code == 'SUCCESS') {
  //       this.setToken(res.data.data);
  //     }
  //     return res;
  //   } catch (error) {
  //     this.isLogined = false;
  //     return Promise.reject(error);
  //   }
  // }

  // async register(data: IRegisterData): Promise<AxiosPromise> {
  //   try {
  //     const res = await Axios.post(AUTH_ENDPOINT.REGISTER, data);
  //     return res;
  //   } catch (error) {
  //     return Promise.reject(error);
  //   }
  // }

  setToken(data: IToken) {
    const expired = new Date(data.accessTokenExpired);
    Cookie.Set('accessToken', data.accessToken, expired);
    Cookie.Set('refreshToken', data.refreshToken);
  }

  // refreshToken(): AxiosPromise {
  //   return Axios.post(AUTH_ENDPOINT.REFRESH_TOKEN, {
  //     refreshToken: Cookie.Get('refreshToken'),
  //   });
  // }

  getAccessToken() {
    return Cookie.Get('accessToken');
  }
}

const authService = new AuthService();
export default authService;
