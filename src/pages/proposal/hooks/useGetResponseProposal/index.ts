import type { UseGetProposalResponse, UseGetProposalResponseParams } from "@pages/proposal/hooks/useGetResponseProposal/types"
import { useEffect, useState } from "react"

export const useGetProposalResponse = (response: UseGetProposalResponseParams): UseGetProposalResponse => {
    const [protocolo, setProtocolo] = useState<string>('')
    const [proposta, setProposta] = useState<string>('')
    useEffect(() => {
        const getDataFromResponse = () => {
            if (response) {
                const { proposta, protocolo } = response
                setProtocolo(protocolo)
                setProposta(proposta)
            }
        }
        getDataFromResponse()
    }, [response])
    return {
        protocolo,
        proposta
    }
}