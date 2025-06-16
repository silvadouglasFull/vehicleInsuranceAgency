import type { TransmitirProposta } from "@modules/suhai/transmitirProposta/dtos";

export type UseGetProposalResponseParams = TransmitirProposta | null
export type UseGetProposalResponse = {
    protocolo: string;
    proposta: string;
}