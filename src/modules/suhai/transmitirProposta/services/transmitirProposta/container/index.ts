import type { ISuhaiServices } from "@modules/suhai/services/ISuhaiServices"
import { SuhaiService } from "@modules/suhai/services/SuhaiService/transmitirProposta/instance"
export const container = (): ISuhaiServices => {
    const suhaiService: ISuhaiServices = new SuhaiService()
    return suhaiService
}