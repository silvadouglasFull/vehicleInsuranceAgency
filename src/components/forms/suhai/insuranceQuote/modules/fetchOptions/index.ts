import type { ResponseFormOptions } from "@modules/formOptions/options/dtos"
import { formOptions } from "@modules/formOptions/options/services"

export const fetchSexo = async (): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ key: 'sexo' })
    return { ...response }
}

export const fetchEstadoCivil = async (): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ key: 'estadoCivil' })
    return { ...response }
}

export const fetchZeroKm = async (): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ key: 'zeroKm' })
    return { ...response }
}

export const fetchTipoUtilizacao = async (): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ key: 'tipoUtilizacao' })
    return { ...response }
}

export const fetchPossuiOutroVeic = async (): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ key: 'possuiOutroVeic' })
    return { ...response }
}

export const fetchTipoContratacao = async (): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ key: 'tipoContratacao' })
    return { ...response }
}

export const fetchSexoPrincipalCondutor = async (): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ key: 'sexoPrincipalCondutor' })
    return { ...response }
}

export const fetchEstadoCivilPrincipalCondutor = async (): Promise<ResponseFormOptions> => {
    const response: ResponseFormOptions = await formOptions.options({ key: 'estadoCivilPrincipalCondutor' })
    return { ...response }
}