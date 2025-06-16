import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types"

export type GetOptionsByKey = Options[]
export type ResponseFormOptions = {
    data?: GetOptionsByKey
    sucess: boolean
    error?: string
}
export type Key =
    'sexo'
    | 'estadoCivil'
    | 'zeroKm'
    | 'tipoUtilizacao'
    | 'possuiOutroVeic'
    | 'tipoContratacao'
    | 'sexoPrincipalCondutor'
    | 'estadoCivilPrincipalCondutor'
    | 'garagemPergunta1'
    | 'garagemPergunta2'
    | 'garagemPergunta3'
    | 'garagemPergunta4'
    | 'codigoCobertura'
    | 'formaPagamento'
export type RequestBodyOptions = {
    key: Key
    signal?: AbortSignal
}