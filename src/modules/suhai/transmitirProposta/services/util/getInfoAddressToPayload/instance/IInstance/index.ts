import type { GetInfoToPayload, GetInfoToPayloadParams } from "@modules/suhai/transmitirProposta/services/util/getInfoAddressToPayload/instance/types";

export interface IInstance {
    getInfoToPayload({ cep }: GetInfoToPayloadParams): Promise<GetInfoToPayload>
}