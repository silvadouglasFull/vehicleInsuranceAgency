import { FormOptionsService } from "@modules/formOptions/options/services/instance"
import type { IFormOptionsService } from "@modules/formOptions/options/services/instance/IInstance"
export const container = (): IFormOptionsService => {
    const formOptionsService: IFormOptionsService = new FormOptionsService()
    return formOptionsService
}