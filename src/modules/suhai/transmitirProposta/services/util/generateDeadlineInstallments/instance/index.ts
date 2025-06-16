import { possibleDeadlinePlot } from "@modules/suhai/transmitirProposta/services/util/generateDeadlineInstallments/constants"
import type { IInstance } from "@modules/suhai/transmitirProposta/services/util/generateDeadlineInstallments/instance/IInstance"
import { getRandomIntInRange } from "@utils/getRandomIntInRange"

export class GenerateDeadlineInstallments implements IInstance {
    public generate(): string {
        const index = getRandomIntInRange(0, (possibleDeadlinePlot.length - 1)) ?? 1
        const dayOfDeadline = possibleDeadlinePlot[index]
        return String(dayOfDeadline)
    }
}