import type { ResponseConsultaCEP } from "@modules/cep/consultaCep/dto";

export type UseFetchAddressInfo = {
    infoAddress: ResponseConsultaCEP | null
    loading: boolean
    value: string
}