import { transformToRequestProposta } from "@modules/suhai/transmitirProposta/services/util/transformToRequestProposta"
import type { Payload, UseCreatePayloadSendProposal, UseCreatePayloadSendProposalParams } from "@pages/proposal/hooks/useCreatePayloadSendProposal/types"
import { useEffect, useState } from "react"

export const useCreatePayloadSendProposal = ({ stateOfContext, stateOfScreenParams }: UseCreatePayloadSendProposalParams): UseCreatePayloadSendProposal => {
    const [payload, setPayload] = useState<Payload>(null)
    useEffect(() => {
        const transformedPayload = transformToRequestProposta.transform({ stateOfContext, stateOfScreenParams })
        setPayload(transformedPayload)
    }, [stateOfContext, stateOfScreenParams])
    return payload
}