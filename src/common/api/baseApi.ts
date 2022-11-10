import axios, { AxiosResponse } from "axios";

const delayValue = 1000;

axios.defaults.baseURL = "https://localhost:5001/api";

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("jwt");

    if (token) config.headers!.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

export const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const requests = {
  get: <T>(url: string): Promise<T> =>
    axios.get<T>(url).then(sleep(delayValue)).then(responseBody),
  post: <T>(url: string, body: unknown): Promise<T> =>
    axios.post<T>(url, body).then(sleep(delayValue)).then(responseBody),
  put: <T>(url: string, body: unknown): Promise<T> =>
    axios.put<T>(url, body).then(sleep(delayValue)).then(responseBody),
  delete: <T>(url: string): Promise<T> =>
    axios.delete<T>(url).then(sleep(delayValue)).then(responseBody),
};
