import { AxiosHttpClient } from '@core/http/AxiosHttpClient';
import { endPoints, host } from '@flavor/api';
import type { EndPoints, UrlString } from '@flavor/api/types';
import type { ISuhaiServices } from '@modules/suhai/services/ISuhaiServices';
import type {
    TransmitirPropostaRequest,
    TransmitirPropostaResponse
} from '@modules/suhai/transmitirProposta/dtos/TransmitirProposta';

export class SuhaiService implements ISuhaiServices {
    public http: AxiosHttpClient;
    private readonly host: UrlString
    private readonly endPoints: EndPoints
    constructor() {
        this.host = host
        this.endPoints = endPoints
        this.http = new AxiosHttpClient(this.host);
    }
    async post(data: TransmitirPropostaRequest): Promise<TransmitirPropostaResponse> {
        return this.http.post<TransmitirPropostaResponse>(`${this.endPoints.transmitirproposta}`, data);
    }
}
