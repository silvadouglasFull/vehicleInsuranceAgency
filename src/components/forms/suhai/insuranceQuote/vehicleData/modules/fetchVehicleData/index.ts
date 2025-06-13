import type { ResponseConsultaFipe } from "@modules/suhai/consultarFipe/dtos"
import { consultaFipe } from "@modules/suhai/consultarFipe/services"
import type { FetchVehicleData } from "./types"


export const fetchVehicleData = async ({ codigoFipe }: FetchVehicleData): Promise<ResponseConsultaFipe> => {
    const response = await consultaFipe.consultation({ codigoFipe })
    return { ...response }
}