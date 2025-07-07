import { AxiosHttpClient } from '@core/suhai/http/AxiosHttpClient';
import { endPoints, host } from '@flavor/whatsapp';
import { keyOfConfig, type UrlString } from '@flavor/whatsapp/types';
import type { RequestWhatsapp, ResponseWhatsapp } from '@modules/whatsapp/quotationCompletion/dto';
import type { IWhatsappServices } from '@modules/whatsapp/quotationCompletion/services/instance/IWhatsappServices';
import { onlyNumbers } from '@utils/transfomerText';

export class WhatsappServices implements IWhatsappServices {
    public http: AxiosHttpClient;
    private readonly host: UrlString
    constructor() {
        this.host = host
        this.http = new AxiosHttpClient(this.host);
    }

    async post({ destino, nome }: RequestWhatsapp): Promise<ResponseWhatsapp> {

        const respose = await this.http.post<ResponseWhatsapp>(`${endPoints.send}`, {
            destino: onlyNumbers(destino),
            nome,
            keyConfig: keyOfConfig
        });
        return respose
    }

}
