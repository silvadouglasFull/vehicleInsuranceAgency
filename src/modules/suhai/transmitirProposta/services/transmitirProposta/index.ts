import { container } from "@modules/suhai/services/SuhaiService/transmitirProposta/container";
import type { TransmitirPropostaRequest, TransmitirPropostaResponse } from "@modules/suhai/transmitirProposta/dtos/TransmitirProposta";
export const transmitirProposta = {
    transmit: async (data: TransmitirPropostaRequest): Promise<TransmitirPropostaResponse> => {
        const response = await container().post(data);
        return response as TransmitirPropostaResponse
    }
}