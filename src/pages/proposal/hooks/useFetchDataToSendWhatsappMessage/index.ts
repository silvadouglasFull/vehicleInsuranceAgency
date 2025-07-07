import { useWebSocketClient } from "@hooks/useWebSocketClient";
import { useCreatePayloadSendMessageWhatsapp } from "@pages/proposal/hooks/useCreatePayloadSendMessageWhatsapp";
import type { UseFecthDataToSendMessageWhatsappMessageParams } from "@pages/proposal/hooks/useFetchDataToSendWhatsappMessage/types";
import { useStartWebSocketConnection } from "@pages/proposal/hooks/useStartWebSocketConnection";
import { useEffect } from "react";

export const useFecthDataToSendMessageWhatsappMessage = ({ formData }: UseFecthDataToSendMessageWhatsappMessageParams) => {
    const { shouldConnect } = useStartWebSocketConnection()
    const { destino, nome: nomeDestino } = useCreatePayloadSendMessageWhatsapp({
        ddd: formData?.ddd_cel,
        nome: formData?.nome,
        num_cel: formData?.num_cel
    })
    const { sendMessage, isConnected } = useWebSocketClient(
        shouldConnect
    );
    console.log(destino, nomeDestino, isConnected)
    useEffect(() => {
        if (destino && nomeDestino && isConnected) sendMessage(JSON.stringify(
            {
                type: 'clientInfoUpdate',
                payload: {
                    nome: nomeDestino,
                    destino,
                }
            }
        ))
    }, [destino, nomeDestino, sendMessage, isConnected])
}