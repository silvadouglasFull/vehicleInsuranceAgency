import type { Data } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe"

export type UseVehicleData = {
    loading: boolean
    items: Record<string, Data[]> | null
    fetchInfo: (controller: AbortController) => Promise<void>
}