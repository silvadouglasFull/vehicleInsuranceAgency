import { GenerateDeadlineInstallments } from "@modules/suhai/transmitirProposta/services/util/generateDeadlineInstallments/instance/"
import type { IInstance } from "@modules/suhai/transmitirProposta/services/util/generateDeadlineInstallments/instance/IInstance"
export const container = (): IInstance => {
    const generateDeadlineInstallments = new GenerateDeadlineInstallments()
    return generateDeadlineInstallments
}