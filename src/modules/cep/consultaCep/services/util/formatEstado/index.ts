import { container } from "@modules/cep/consultaCep/services/util/formatEstado/container"
export const formatEstado = {
    format: (estado: string) => container().init(estado)
}