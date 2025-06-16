import type { States } from "@components/forms/suhai/insuranceQuote/context/types";
import { CovaragePlans } from "@components/quote/suhai/coveragePlans";
import { InfoFipe } from "@components/quote/suhai/infoFipe";
import { BasicInfo } from "@components/quote/suhai/proposal/basicInfo";
import { RFC } from "@components/quote/suhai/rcf";
import { Toast } from "@components/toast";
import { useToast } from "@components/toast/hooks/useToast";
import { useCreatePayloadSendProposal } from "@pages/proposal/hooks/useCreatePayloadSendProposal";
import { useDataQuote } from "@pages/proposal/layouts/hooks/useDataQuote";
import { useGetParamsSecreen } from "@pages/proposal/layouts/hooks/useGetParamsScreen";
import type { State } from "@pages/proposal/layouts/hooks/useGetParamsScreen/types";
import { fetchEnviarProposta } from "@pages/proposal/modules/fetchTransmitirProposta";
import React from "react";
import { Card, Container } from "react-bootstrap";

export const DefaultLayout: React.FC = () => {
    const { data, formData } = useGetParamsSecreen()
    const payload = useCreatePayloadSendProposal({ stateOfContext: formData as States, stateOfScreenParams: data as State })
    const { awardCoverage, infoFipe, rcf, summary } = useDataQuote(data ?? null)
    const { onClose, show, setMessage, setStatusCode, statusCode, message: messageResponse } = useToast()
    const sendProposal = async () => {
        if (payload) {
            const response = await fetchEnviarProposta({ ...payload })
            const { status } = response
            if (status !== 200) {
                const { error } = response
                setMessage(error ?? 'Não foi possível completar sua solicitação')
            }
            const { data } = response
            setStatusCode(status)
            console.log(data)
            return
        }
    }
    return (
        <>
            {summary && (<BasicInfo {...summary} />)}
            {infoFipe && (<InfoFipe {...infoFipe} />)}
            {awardCoverage?.Cobertura?.length && (<CovaragePlans
                sendProposal={sendProposal}
                PremioCoberturas={awardCoverage} />)}
            <Container>
                <Card.Text className="text-success">
                    Outras informações
                </Card.Text>
            </Container>
            {rcf && (<RFC RFC={rcf} />)}
            <Toast message={messageResponse} onclose={onClose} show={show} statusCode={statusCode} />
            {payload && (Object.keys(payload) as Array<keyof typeof payload>).map(item => (
                <Card.Text key={String(item)}>
                    {item}: {payload[item]}
                </Card.Text>
            ))}
        </>
    )
}