import type { ConsultarFipeRequest, ConsultarFipeResponse } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe";
import type { IncluirCotacaoRequest, IncluirCotacaoResponse } from "@modules/suhai/incluirCotacao/dtos/IncluirCotacao";
import type { TransmitirPropostaRequest, TransmitirPropostaResponse } from "@modules/suhai/transmitirProposta/dtos/TransmitirProposta";

export interface ISuhaiServices {
    post(data: ConsultarFipeRequest | IncluirCotacaoRequest | TransmitirPropostaRequest): Promise<ConsultarFipeResponse | IncluirCotacaoResponse | TransmitirPropostaResponse>
}