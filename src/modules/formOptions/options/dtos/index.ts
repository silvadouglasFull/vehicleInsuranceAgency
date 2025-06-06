import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types"

export type GetOptionsByKey = Options[]
export type ResponseFormOptions = {
    data?: GetOptionsByKey
    sucess: boolean
    error?: string
}
export type Key = 'sexo' | 'estadoCivil' | 'zeroKm' | 'tipoUtilizacao' | 'possuiOutroVeic' | 'tipoContratacao' | 'sexoPrincipalCondutor' | 'estadoCivilPrincipalCondutor'
export type RequestBodyOptions = {
    key: Key
    signal?: AbortSignal
}