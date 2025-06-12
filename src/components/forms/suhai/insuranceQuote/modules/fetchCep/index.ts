import { consultaCEP } from '@modules/cep/consultaCep/services'
import type { FetchCEP, FetchCEPParams } from './types'
export const fetchCep = async (cep: FetchCEPParams): FetchCEP => {
    const response = await consultaCEP.consult(cep)
    return { ...response }
}