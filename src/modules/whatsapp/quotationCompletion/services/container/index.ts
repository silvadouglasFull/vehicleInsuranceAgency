import { WhatsappServices } from "@modules/whatsapp/quotationCompletion/services/instance";
import type { IWhatsappServices } from "@modules/whatsapp/quotationCompletion/services/instance/IWhatsappServices";

export const container = (): IWhatsappServices => {
    const whatsappServices: IWhatsappServices = new WhatsappServices()
    return whatsappServices
}