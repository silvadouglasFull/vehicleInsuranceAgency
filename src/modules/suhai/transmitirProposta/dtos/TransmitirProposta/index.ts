// src/modules/suhai/dtos/TransmitirProposta.dto.ts

/** Request body for transmitting proposal */
export interface TransmitirPropostaRequest {
    numeroCotacao: string;
    dadosPagamento: {
        formaPagamento: string;
        quantidadeParcelas: number;
    };
    dadosSegurado: {
        nome: string;
        cpf: string;
        endereco: string;
    };
}

/** Response for proposal transmission */
export interface TransmitirPropostaResponse {
    numeroProposta: string;
    status: string;
    pdfPropostaBase64: string;
}
