import { endPoints, host } from "@flavor/whatsapp";
import type { RequestWhatsapp } from "@modules/whatsapp/quotationCompletion/dto";

export const fetchWhatsapp = ({ destino, nome }: RequestWhatsapp): void => {
    if (destino && nome) {
        const payload = { destino, nome }
        const blob = new Blob([JSON.stringify(payload)], {
            type: 'application/json',
        });
        navigator.sendBeacon(`${host}${endPoints.send}`, blob);
    }
}