import type { States } from "@components/forms/suhai/insuranceQuote/context/types";
import type { TransmitirPropostaRequest } from "@modules/suhai/transmitirProposta/dtos";
import type { State } from "@pages/quote/layouts/hooks/useGetParamsScreen/types";
export type Payload = TransmitirPropostaRequest | null

export type UseCreatePayloadSendProposalParams = {
    stateOfContext: States
    stateOfScreenParams: State
}
export type UseCreatePayloadSendProposal = Payload