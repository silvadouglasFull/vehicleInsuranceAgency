import { convertToBrazilianDate } from "@utils/transformData"
import type { FormaDates, FormaDatesParams } from "./types"


export const formatDatesToPayload = ({ dtNascimento, dtNascimentoPrincipalCondutor }: FormaDatesParams): FormaDates => {
    return {
        dtNascimento: dtNascimento ? convertToBrazilianDate(dtNascimento) : '',
        dtNascimentoPrincipalCondutor: dtNascimentoPrincipalCondutor ? convertToBrazilianDate(dtNascimentoPrincipalCondutor) : '',
    }
}