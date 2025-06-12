import { AxiosHttpClient } from '@core/suhai/http/AxiosHttpClient';
import { endPoints, host } from '@flavor/cep';
import type { EndPoints, UrlString } from '@flavor/cep/types';
import type {
    RequestConsultaCEP,
    ResponseConsultaCEP
} from '@modules/cep/consultaCep/dto';
import type { ICEPServices } from '@modules/cep/consultaCep/services/instance/ICEPServices';

export class CEPServices implements ICEPServices {
    public http: AxiosHttpClient;
    private readonly host: UrlString
    private readonly endPoints: EndPoints
    constructor() {
        this.host = host
        this.endPoints = endPoints
        this.http = new AxiosHttpClient(this.host);
    }

    async get({ cep, signal }: RequestConsultaCEP): Promise<ResponseConsultaCEP> {
        return this.http.get<ResponseConsultaCEP>(`${this.endPoints.consultCEP(cep)}`, {
            signal
        });
    }

}
