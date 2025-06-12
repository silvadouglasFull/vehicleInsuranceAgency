import { CEPServices } from "@modules/cep/consultaCep/services/instance"
import type { ICEPServices } from "@modules/cep/consultaCep/services/instance/ICEPServices"

export const container = (): ICEPServices => {
    const cepServices: ICEPServices = new CEPServices()
    return cepServices
}