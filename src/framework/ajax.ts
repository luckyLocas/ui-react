import axios, { AxiosRequestConfig } from 'axios';
import { getStore } from './utils/localStorage';

interface IProps {
  aa: string;
}

interface IState {
  aa: string;
}

type Partial<T> = {
  readonly [key in keyof T]?: T[key];
};

const myAxios = axios.create({
  timeout: 10000
});
myAxios.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    const token = getStore('token');
    if (config && config.headers && token) {
      config.headers.Authorization = token;
    }
  },
  (error) => {
    console.log('error', error);
    return error;
  }
);

class newAxios {
  aa: IState['aa'];
  constructor() {
    this.aa = '';
  }
  get = async <T, T1>(url: string, param: T): Promise<T1 | undefined> => {
    try {
      const result: T1 = await myAxios.get(url, param);
      return result;
    } catch (error) {
      console.log('error', error);
      return undefined;
    }
  };
}

export default newAxios;
