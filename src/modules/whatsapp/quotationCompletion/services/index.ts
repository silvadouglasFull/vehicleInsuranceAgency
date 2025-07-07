import type { RequestWhatsapp, ResponseWhatsapp } from "@modules/whatsapp/quotationCompletion/dto";
import { container } from "@modules/whatsapp/quotationCompletion/services/container";

export const whatsapp = {
    send: async ({ destino, nome }: RequestWhatsapp): Promise<ResponseWhatsapp> => container().post({ destino, nome })
}