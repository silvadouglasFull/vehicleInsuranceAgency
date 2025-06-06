import type { ResponseConsultaFipe } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe"
import { consultaFipe } from "@modules/suhai/consultarFipe/services/consultafipe"
import type { FetchVehicleData } from "./types"


export const fetchVehicleData = async ({ codigoFipe }: FetchVehicleData): Promise<ResponseConsultaFipe> => {
    const response = await consultaFipe.consultation({ codigoFipe })
    return { ...response }
}