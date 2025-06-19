import type { Data } from "@modules/suhai/consultarFipe/dtos";

export interface ITransformParseValue {
    init(value: string): Data[] | []
}