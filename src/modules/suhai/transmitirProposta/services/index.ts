import type { TransmitirPropostaRequest, TransmitirPropostaResponse } from "@modules/suhai/transmitirProposta/dtos";
import { container } from "@modules/suhai/transmitirProposta/services/container";
export const transmitirProposta = {
    transmit: async (data: TransmitirPropostaRequest): Promise<TransmitirPropostaResponse> => {
        const response = await container().post(data);
        return response as TransmitirPropostaResponse
    }
}