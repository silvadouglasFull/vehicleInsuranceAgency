import type { ConsultarFipeRequest, ResponseConsultaFipe } from "@modules/suhai/consultarFipe/dtos";
import type { IncluirCotacaoRequest, IncluirCotacaoResponse } from "@modules/suhai/incluirCotacao/dtos";
import type { TransmitirPropostaRequest, TransmitirPropostaResponse } from "@modules/suhai/transmitirProposta/dtos";

export interface ISuhaiServices {
    post(data: ConsultarFipeRequest | IncluirCotacaoRequest | TransmitirPropostaRequest): Promise<ResponseConsultaFipe | IncluirCotacaoResponse | TransmitirPropostaResponse>
}