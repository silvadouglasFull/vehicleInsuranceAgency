import type { FetchCEP, FetchCEPParams } from '@components/forms/suhai/insuranceQuote/modules/fetchCep/types'
import { consultaCEP } from '@modules/cep/consultaCep/services'
export const fetchCep = async (cep: FetchCEPParams): FetchCEP => {
    const response = await consultaCEP.consult(cep)
    return { ...response }
}