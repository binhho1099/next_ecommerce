import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { Cookie } from './cookie';
/**
 * Create Axios Instance
 */
const Axios: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API_DOMAIN}`,
  headers: {
    'content-type': 'application/json',
  },
});

// Axios.interceptors.request.use((config: AxiosRequestConfig) => {
//   const access_token = Cookie.Get('accessToken');
//   const refresh_token = Cookie.Get('accessToken');
//   if (refresh_token) {
//     config.headers!.Authorization = `Bearer ${refresh_token}`;
//   }
//   return config;
// });

Axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    return error;
  }
);

export { Axios };
