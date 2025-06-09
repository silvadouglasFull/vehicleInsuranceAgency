import { FormOptionsService } from "@modules/formOptions/options/vehicleData/services/instance"
import type { IFormOptionsService } from "@modules/formOptions/options/vehicleData/services/instance/Instance"
export const container = (): IFormOptionsService => {
    const formOptionsService: IFormOptionsService = new FormOptionsService()
    return formOptionsService
}