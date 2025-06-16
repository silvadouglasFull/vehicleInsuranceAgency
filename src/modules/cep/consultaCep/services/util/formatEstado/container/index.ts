import { FormatEstado } from "@modules/cep/consultaCep/services/util/formatEstado/instance"
import type { IInstance } from "@modules/cep/consultaCep/services/util/formatEstado/instance/IInstance"
export const container = (): IInstance => {
    const formatEstado = new FormatEstado()
    return formatEstado
}