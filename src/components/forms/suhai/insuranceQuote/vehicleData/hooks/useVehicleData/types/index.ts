import type { Data } from "@modules/suhai/consultarFipe/dtos"

export type UseVehicleData = {
    loading: boolean
    items: Record<string, Data[]> | null
    fetchInfo: (controller: AbortController) => Promise<void>
}