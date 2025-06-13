import type { TransmitirPropostaRequest, TransmitirPropostaResponse } from "@modules/suhai/transmitirProposta/dtos";
import { transmitirProposta } from "@modules/suhai/transmitirProposta/services";

export const fetchEnviarProposta = async (data: TransmitirPropostaRequest): Promise<TransmitirPropostaResponse> => {
    const respose = await transmitirProposta.transmit(data)
    return { ...respose }
}