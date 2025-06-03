// src/modules/suhai/dtos/ConsultarFipe.dto.ts

/** Request body for FIPE consultation */
export interface ConsultarFipeRequest {
    codigoFipe: string;
}

/** Response for FIPE consultation */
export interface ConsultarFipeResponse {
    marca: string;
    modelo: string;
    anoModelo: number;
    codigoFipe: string;
}
