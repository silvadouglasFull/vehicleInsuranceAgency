import type { IAxiosHttpClient } from '@core/http/AxiosHttpClient/IAxiosHttpClient';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
export class AxiosHttpClient implements IAxiosHttpClient {
    private readonly client: AxiosInstance;

    constructor(baseURL: string) {
        this.client = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            validateStatus: () => true
        });
    }

    async post<T = any, R = AxiosResponse<T>>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.post<T>(url, data, config);
        const { data: responseData, status } = response
        return {
            ...responseData,
            status
        };
    }
    async get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.get<T>(url, config);
        const { data: responseData, status } = response
        return {
            ...responseData,
            status
        };
    }
}
