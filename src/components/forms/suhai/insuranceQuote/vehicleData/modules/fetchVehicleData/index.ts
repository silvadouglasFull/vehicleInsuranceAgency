import type { FetchVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData/modules/fetchVehicleData/types"
import type { ResponseConsultaFipe } from "@modules/suhai/consultarFipe/dtos"
import { consultaFipe } from "@modules/suhai/consultarFipe/services"


export const fetchVehicleData = async ({ codigoFipe, categoria, signal }: FetchVehicleData): Promise<ResponseConsultaFipe> => {
    const response = await consultaFipe.consultation({ codigoFipe, categoria, signal })
    return { ...response }
}