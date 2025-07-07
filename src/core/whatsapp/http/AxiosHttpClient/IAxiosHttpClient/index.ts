import type { RequestWhatsapp } from '@core/whatsapp/http/AxiosHttpClient/types';
import type { AxiosRequestConfig } from 'axios';

export interface IAxiosHttpClient {
    post<T = unknown>(url: string, data: RequestWhatsapp, config?: AxiosRequestConfig): Promise<T>
}