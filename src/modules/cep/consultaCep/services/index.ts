import type { RequestConsultaCEP, ResponseConsultaCEP } from "@modules/cep/consultaCep/dto";
import { container } from "@modules/cep/consultaCep/services/container";

export const consultaCEP = {
    consult: async (cep: RequestConsultaCEP): Promise<ResponseConsultaCEP> => container().get(cep)
}