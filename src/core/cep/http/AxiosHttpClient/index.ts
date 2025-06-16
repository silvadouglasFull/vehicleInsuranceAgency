import type { IAxiosHttpClient } from '@core/cep/http/AxiosHttpClient/IAxiosHttpClient';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
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

    async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.get<T>(url, config);
        const { data: responseData, status } = response
        return {
            ...responseData,
            status
        };
    }
}
