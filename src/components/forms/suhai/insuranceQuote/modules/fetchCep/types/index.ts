import type { RequestConsultaCEP, ResponseConsultaCEP } from "@modules/cep/consultaCep/dto"

export type FetchCEPParams = RequestConsultaCEP
export type FetchCEP = Promise<ResponseConsultaCEP>