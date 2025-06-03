import type { TransmitirPropostaRequest, TransmitirPropostaResponse } from "@modules/suhai/dtos/TransmitirProposta";
import { container } from "@modules/suhai/services/SuhaiService/transmitirProposta/container";
export const transmitirProposta = {
    transmit: async (data: TransmitirPropostaRequest): Promise<TransmitirPropostaResponse> => {
        const response = await container().post(data);
        return response as TransmitirPropostaResponse
    }
}