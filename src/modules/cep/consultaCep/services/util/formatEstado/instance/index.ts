import { estadosBrasil } from "@modules/cep/consultaCep/services/util/formatEstado/constants";
import type { IInstance } from "@modules/cep/consultaCep/services/util/formatEstado/instance/IInstance";
import type { Format, FormatParams } from "@modules/cep/consultaCep/services/util/formatEstado/instance/types";
import { sanitizeString } from "@utils/transfomerText/sanitizeString";


export class FormatEstado implements IInstance {
    private format({ estado }: FormatParams): Format {
        const findEstado = estadosBrasil.find(item => sanitizeString(estado).toLowerCase() === sanitizeString(item.estado).toLowerCase())
        if (findEstado) {
            const { codigoEstado } = findEstado
            return codigoEstado.toUpperCase()
        }
        return estado.toUpperCase()
    }
    public init(estado: string): string {
        return this.format({ estado })

    }
}