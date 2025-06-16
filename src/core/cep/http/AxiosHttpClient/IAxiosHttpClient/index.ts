import type { AxiosRequestConfig } from 'axios';

export interface IAxiosHttpClient {
    get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>
}