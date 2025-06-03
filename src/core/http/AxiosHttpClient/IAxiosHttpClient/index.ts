import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IAxiosHttpClient {
    post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
}