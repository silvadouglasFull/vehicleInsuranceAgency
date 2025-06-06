import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types"

export type GetOptionsByKey = Options[]
export type ResponseFormOptions = {
    data?: GetOptionsByKey
    sucess: boolean
    error?: string
}
export type RequestBodyOptions = {
    key: 'sexo' | 'estadoCivil' | 'zeroKm' | 'tipoUtilizacao' | 'possuiOutroVeic' | 'tipoContratacao' | 'sexoPrincipalCondutor' | 'estadoCivilPrincipalCondutor'
    signal?: AbortSignal
}