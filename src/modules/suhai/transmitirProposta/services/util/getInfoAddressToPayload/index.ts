import { container } from "@modules/suhai/transmitirProposta/services/util/getInfoAddressToPayload/container";
import type { GetInfoToPayload, GetInfoToPayloadParams } from "@modules/suhai/transmitirProposta/services/util/getInfoAddressToPayload/instance/types";

export const getInfoAdressToPayload = {
    getInfo: async ({ cep }: GetInfoToPayloadParams): Promise<GetInfoToPayload> => container().getInfoToPayload({ cep })
}