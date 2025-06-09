import { AxiosHttpClient } from '@core/http/AxiosHttpClient';
import { endPoints, host } from '@flavor/api';
import type { EndPoints, UrlString } from '@flavor/api/types';
import type {
    RequestBodyOptions,
    ResponseFormOptions
} from '@modules/formOptions/options/vehicleData/dtos';
import type { IFormOptionsService } from '@modules/formOptions/options/vehicleData/services/instance/Instance';

export class FormOptionsService implements IFormOptionsService {
    public http: AxiosHttpClient;
    private readonly host: UrlString
    private readonly endPoints: EndPoints
    constructor() {
        this.host = host
        this.endPoints = endPoints
        this.http = new AxiosHttpClient(this.host);
    }

    async get({ key, signal }: RequestBodyOptions): Promise<ResponseFormOptions> {
        return this.http.get<ResponseFormOptions>(`${this.endPoints.formOptions}/${key}`, {
            signal
        });
    }
}
