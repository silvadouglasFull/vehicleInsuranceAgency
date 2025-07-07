import type { IAxiosHttpClient } from '@core/whatsapp/http/AxiosHttpClient/IAxiosHttpClient';
import type { RequestWhatsapp } from '@core/whatsapp/http/AxiosHttpClient/types';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
export class AxiosHttpClient implements IAxiosHttpClient {
    private readonly client: AxiosInstance;

    constructor(baseURL: string) {
        this.client = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
            validateStatus: () => true
        });
    }

    async post<T = unknown>(url: string, data: RequestWhatsapp, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.post<T>(url, data, config);
        const { data: responseData, status } = response
        return {
            ...responseData,
            status
        };
    }
}
