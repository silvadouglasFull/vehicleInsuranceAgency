import { AxiosHttpClient } from '@core/suhai/http/AxiosHttpClient';
import { endPoints, host } from '@flavor/cep';
import type { EndPoints, UrlString } from '@flavor/cep/types';
import type {
    RequestConsultaCEP,
    ResponseConsultaCEP
} from '@modules/cep/consultaCep/dto';
import type { ICEPServices } from '@modules/cep/consultaCep/services/instance/ICEPServices';
import type { IInstance as IFormatCEP } from "@modules/cep/consultaCep/services/util/formatEstado/instance/IInstance";

export class CEPServices implements ICEPServices {
    public http: AxiosHttpClient;
    private readonly host: UrlString
    private readonly endPoints: EndPoints
    private readonly formatEstado: IFormatCEP
    constructor(formatEstado: IFormatCEP) {
        this.host = host
        this.endPoints = endPoints
        this.http = new AxiosHttpClient(this.host);
        this.formatEstado = formatEstado
    }

    async get({ cep, signal }: RequestConsultaCEP): Promise<ResponseConsultaCEP> {
        const respose = await this.http.get<ResponseConsultaCEP>(`${this.endPoints.consultCEP(cep)}`, {
            signal
        });
        const { estado, ...rest } = respose
        return {
            ...rest,
            estado: await this.formatEstado.init(estado) ?? estado
        }
    }

}
