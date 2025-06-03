// src/modules/suhai/services/SuhaiService.ts
import { AxiosHttpClient } from '@core/http/AxiosHttpClient';
import { endPoints, host } from '@flavor/api';
import type { EndPoints, UrlString } from '@flavor/api/types';
import type {
    ConsultarFipeRequest,
    ConsultarFipeResponse
} from '@modules/suhai/dtos/ConsultarFipe/';
import type { ISuhaiServices } from '@modules/suhai/services/SuhaiService/ISuhaiServices';

export class SuhaiService implements ISuhaiServices {
    public http: AxiosHttpClient;
    private readonly host: UrlString
    private readonly endPoints: EndPoints
    constructor() {
        this.host = host
        this.endPoints = endPoints
        this.http = new AxiosHttpClient(this.host);
    }

    async post(data: ConsultarFipeRequest): Promise<ConsultarFipeResponse> {
        return this.http.post<ConsultarFipeResponse>(`${this.endPoints.consultafipe}`, data);
    }
}
