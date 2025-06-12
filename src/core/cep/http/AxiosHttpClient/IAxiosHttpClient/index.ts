import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IAxiosHttpClient {
    get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<T>
}