import type { RequestWhatsapp, ResponseWhatsapp } from "@modules/whatsapp/quotationCompletion/dto";
import { whatsapp } from "@modules/whatsapp/quotationCompletion/services";

export const fetchWhatsapp = ({ destino, nome }: RequestWhatsapp): Promise<ResponseWhatsapp | void> => {
    if (destino && nome) {
        return whatsapp.send({ destino, nome });
    }
    return Promise.resolve();
}