// src/modules/suhai/dtos/IncluirCotacao.dto.ts

/** Request body for including quotation */
export interface IncluirCotacaoRequest {
    cpf: string;
    nome: string;
    email: string;
    telefone: string;
    veiculo: {
        codigoFipe: string;
        marca: string;
        modelo: string;
        anoModelo: number;
        valor: number;
    };
}

/** Response for quotation inclusion */
export interface IncluirCotacaoResponse {
    numeroCotacao: string;
    status: string;
    validade: string;
}
