import { AxiosHttpClient } from '@core/http/AxiosHttpClient';
import { endPoints, host } from '@flavor/api';
import type { EndPoints, UrlString } from '@flavor/api/types';
import type {
    ConsultarFipeRequest,
    ResponseConsultaFipe
} from '@modules/suhai/consultarFipe/dtos/ConsultarFipe';
import type { ISuhaiServices } from '@modules/suhai/services/ISuhaiServices';

export class SuhaiService implements ISuhaiServices {
    public http: AxiosHttpClient;
    private readonly host: UrlString
    private readonly endPoints: EndPoints
    constructor() {
        this.host = host
        this.endPoints = endPoints
        this.http = new AxiosHttpClient(this.host);
    }

    async post({ codigoFipe, signal }: ConsultarFipeRequest): Promise<ResponseConsultaFipe> {
        return this.http.post<ResponseConsultaFipe>(`${this.endPoints.consultafipe}`, codigoFipe, {
            signal
        });
    }
}
