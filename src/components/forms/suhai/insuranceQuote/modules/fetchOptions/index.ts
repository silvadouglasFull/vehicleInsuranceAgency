import type { ResponseFormOptions } from "@modules/formOptions/options/dtos"
import { formOptions } from "@modules/formOptions/options/services"
import type { FetchOptions } from "./types"

export const fetchSexo = async ({ signal }: FetchOptions): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ signal, key: 'sexo' })
    return { ...response }
}

export const fetchEstadoCivil = async ({ signal }: FetchOptions): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ signal, key: 'estadoCivil' })
    return { ...response }
}

export const fetchZeroKm = async ({ signal }: FetchOptions): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ signal, key: 'zeroKm' })
    return { ...response }
}

export const fetchTipoUtilizacao = async ({ signal }: FetchOptions): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ signal, key: 'tipoUtilizacao' })
    return { ...response }
}

export const fetchPossuiOutroVeic = async ({ signal }: FetchOptions): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ signal, key: 'possuiOutroVeic' })
    return { ...response }
}

export const fetchTipoContratacao = async ({ signal }: FetchOptions): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ signal, key: 'tipoContratacao' })
    return { ...response }
}

export const fetchSexoPrincipalCondutor = async ({ signal }: FetchOptions): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ signal, key: 'sexoPrincipalCondutor' })
    return { ...response }
}

export const fetchEstadoCivilPrincipalCondutor = async ({ signal }: FetchOptions): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ signal, key: 'estadoCivilPrincipalCondutor' })
    return { ...response }
}