import { container as containerConsultaCEP } from "@modules/cep/consultaCep/services/container";
import { GetInfoAddressToPayload } from "@modules/suhai/transmitirProposta/services/util/getInfoAddressToPayload/instance";
import type { IInstance } from "@modules/suhai/transmitirProposta/services/util/getInfoAddressToPayload/instance/IInstance";

export const container = (): IInstance => {
    const http = containerConsultaCEP()
    const getInfoAddressToPayload = new GetInfoAddressToPayload(http)
    return getInfoAddressToPayload
}