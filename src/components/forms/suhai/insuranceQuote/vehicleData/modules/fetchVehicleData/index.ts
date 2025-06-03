import type { ResponseConsultaFipe } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe"
import { consultaFipe } from "@modules/suhai/consultarFipe/services/consultafipe"

export type FetchVehicleData = {
    codigoFipe: string
}

export const fetchVehicleData = async ({ codigoFipe }: FetchVehicleData): Promise<ResponseConsultaFipe> => {
    const response = await consultaFipe.consultation({ codigoFipe })
    return { ...response }
}