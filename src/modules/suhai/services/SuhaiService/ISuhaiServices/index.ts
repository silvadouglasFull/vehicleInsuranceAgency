import type { ConsultarFipeRequest, ConsultarFipeResponse } from "@modules/suhai/dtos/ConsultarFipe";
import type { IncluirCotacaoRequest, IncluirCotacaoResponse } from "@modules/suhai/dtos/IncluirCotacao";
import type { TransmitirPropostaRequest, TransmitirPropostaResponse } from "@modules/suhai/dtos/TransmitirProposta";

export interface ISuhaiServices {
    post(data: ConsultarFipeRequest | IncluirCotacaoRequest | TransmitirPropostaRequest): Promise<ConsultarFipeResponse | IncluirCotacaoResponse | TransmitirPropostaResponse>
}