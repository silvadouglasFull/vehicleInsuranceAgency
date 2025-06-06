import type { Data } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe";

export interface ITransformParseValue {
    init(value: string): Data[] | []
}