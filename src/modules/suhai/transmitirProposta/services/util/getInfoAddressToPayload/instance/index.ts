import type { ICEPServices } from "@modules/cep/consultaCep/services/instance/ICEPServices";
import type { IInstance } from "@modules/suhai/transmitirProposta/services/util/getInfoAddressToPayload/instance/IInstance";
import type { GetInfoToPayload, GetInfoToPayloadParams } from "@modules/suhai/transmitirProposta/services/util/getInfoAddressToPayload/instance/types";

export class GetInfoAddressToPayload implements IInstance {
    private readonly htpp: ICEPServices
    constructor(http: ICEPServices) {
        this.htpp = http
    }
    async getInfoToPayload({ cep }: GetInfoToPayloadParams): Promise<GetInfoToPayload> {
        const response = await this.htpp.get({ cep })
        return {
            endereco: response.logradouro,
            cidade: response.localidade,
            uf: response.estado,
            bairro: response.bairro,
            ddd_cel: response.ddd,
            ddd_res: response.ddd,
        }
    }
}