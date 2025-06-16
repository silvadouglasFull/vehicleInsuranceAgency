import { CEPServices } from "@modules/cep/consultaCep/services/instance";
import type { ICEPServices } from "@modules/cep/consultaCep/services/instance/ICEPServices";
import { container as formatEstadoContainer } from "@modules/cep/consultaCep/services/util/formatEstado/container";

export const container = (): ICEPServices => {
    const formatEstado = formatEstadoContainer()
    const cepServices: ICEPServices = new CEPServices(formatEstado)
    return cepServices
}