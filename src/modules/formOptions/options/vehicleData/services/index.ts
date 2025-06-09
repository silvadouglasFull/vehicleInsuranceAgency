import type { RequestBodyOptions } from "@modules/formOptions/options/dtos"
import { container } from "@modules/formOptions/options/vehicleData/services/container"
export const formOptions = {
    options: async ({ signal, key }: RequestBodyOptions) => container().get({ key, signal })
}