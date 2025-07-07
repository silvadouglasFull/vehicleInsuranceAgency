import type { RequestWhatsapp } from "@modules/whatsapp/quotationCompletion/dto"
import type { UseCreatePayloadSendMessageWhatsappParams } from "@pages/proposal/hooks/useCreatePayloadSendMessageWhatsapp/types"
import { useEffect, useState } from "react"
export const useCreatePayloadSendMessageWhatsapp = ({ ddd, num_cel, nome }: UseCreatePayloadSendMessageWhatsappParams): RequestWhatsapp => {
    const [payload, setPayload] = useState<RequestWhatsapp>({ destino: '', nome: '' })
    useEffect(() => {
        if (ddd && num_cel) {
            setPayload({
                destino: `${num_cel}`,
                nome: nome ?? ''
            })
        }
    }, [ddd, num_cel, nome])
    return {
        ...payload
    }
}