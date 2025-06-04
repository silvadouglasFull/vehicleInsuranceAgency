// src/modules/suhai/dtos/ConsultarFipe.dto.ts

/** Request body for FIPE consultation */
export interface ConsultarFipeRequest {
    codigoFipe: string;
    signal?: AbortSignal
}
export type Data = {
    protocolo?: null | string,
    codMsgRet?: null | string,
    textoMsgRet?: null | string,
    cod_fipe?: string,
    num_passageiros?: number,
    cod_marca?: string,
    marca?: string,
    cod_modelo?: string,
    modelo?: string,
    cod_categoria_suhai?: number,
    categoria_suhai?: string,
    cod_categoria_tarifaria?: number
}
export type ResponseConsultaFipe = {
    data?: Data[]
    error?: string
    success: boolean
}