import type { ISuhaiServices } from "@modules/suhai/services/SuhaiService/ISuhaiServices"
import { SuhaiService } from "@modules/suhai/services/SuhaiService/consultafipe/instance"

export const container = (): ISuhaiServices => {
    const suhaiService: ISuhaiServices = new SuhaiService()
    return suhaiService
}