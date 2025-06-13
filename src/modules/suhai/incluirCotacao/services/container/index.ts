import { SuhaiService } from "@modules/suhai/incluirCotacao/services/instance"
import type { ISuhaiServices } from "@modules/suhai/services/ISuhaiServices"

export const container = (): ISuhaiServices => {
    const suhaiService: ISuhaiServices = new SuhaiService()
    return suhaiService
}