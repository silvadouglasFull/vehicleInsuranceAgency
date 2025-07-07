import type { StatusCode } from "@api/statusCode/types";
import type { States } from "@components/forms/suhai/insuranceQuote/context/types";
import { CovaragePlans } from "@components/proposal/suhai/coveragePlans";
import { InfoFipe } from "@components/proposal/suhai/infoFipe";
import ModalQuote from "@components/proposal/suhai/modal/proposal";
import { useShowModal } from '@components/proposal/suhai/modal/proposal/hooks/useShowModal';
import { BasicInfo } from "@components/proposal/suhai/proposal/basicInfo";
import { RFC } from "@components/proposal/suhai/rcf";
import { Spinner } from "@components/spinner";
import { Toast } from "@components/toast";
import { useToast } from "@components/toast/hooks/useToast";
import { usePageExitDetector } from "@hooks/usePageExitDetector";
import type { TransmitirProposta } from "@modules/suhai/transmitirProposta/dtos";
import { ChildrenModal } from "@pages/proposal/childrenModal";
import { useCreatePayloadSendMessageWhatsapp } from "@pages/proposal/hooks/useCreatePayloadSendMessageWhatsapp";
import { useCreatePayloadSendProposal } from "@pages/proposal/hooks/useCreatePayloadSendProposal";
import { useGetProposalResponse } from "@pages/proposal/hooks/useGetResponseProposal";
import { useDataQuote } from "@pages/proposal/layouts/hooks/useDataQuote";
import { useGetParamsSecreen } from "@pages/proposal/layouts/hooks/useGetParamsScreen";
import type { State } from "@pages/proposal/layouts/hooks/useGetParamsScreen/types";
import { createParamsToastWhenErrorPayload } from "@pages/proposal/layouts/utils/createParamsToastWhenErrorPayload";
import { fetchEnviarProposta } from "@pages/proposal/modules/fetchTransmitirProposta";
import { fetchWhatsapp } from "@pages/proposal/modules/fetchWhatsapp";
import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const DefaultLayout: React.FC = () => {
    const { data, formData } = useGetParamsSecreen()
    const payload = useCreatePayloadSendProposal({ stateOfContext: formData as States, stateOfScreenParams: data as State })
    const { awardCoverage, infoFipe, rcf, summary } = useDataQuote(data ?? null)
    const { onClose, show, setMessage, setStatusCode, statusCode, message: messageResponse } = useToast()
    const { handleShow, handleClose, show: ModalShow } = useShowModal()
    const [response, setResponse] = useState<TransmitirProposta | null>(null)
    const { proposta, protocolo } = useGetProposalResponse(response)
    const [loading, setLoading] = useState<boolean>(false)
    const { ddd_cel, num_cel, nome } = formData as States
    const { destino, nome: nomeDestino } = useCreatePayloadSendMessageWhatsapp({
        ddd: ddd_cel,
        num_cel,
        nome
    })
    usePageExitDetector(() => {
        fetchWhatsapp({ destino, nome: nomeDestino })
    })
    const sendProposal = async () => {
        if (payload) {
            setLoading(true)
            const response = await fetchEnviarProposta({ ...payload })
            const { status } = response
            if (status !== 200) {
                const { error } = response
                setMessage(error ?? 'Não foi possível completar sua solicitação')
            }
            const { data } = response
            setStatusCode(status)
            if (data) {
                setResponse({ ...data })
                handleShow()
            }
            return setLoading(false)
        }
        const toastParams = createParamsToastWhenErrorPayload()
        setStatusCode(toastParams.statusCode as StatusCode)
        setMessage(toastParams.message ?? '')

    }
    return (
        <>
            {summary && (<BasicInfo {...summary} />)}
            {infoFipe && (<InfoFipe {...infoFipe} />)}
            {awardCoverage?.Cobertura?.length && (<CovaragePlans
                loading={loading}
                sendProposal={sendProposal}
                PremioCoberturas={awardCoverage} />)}
            <Container>
                <Card.Text className="text-info">
                    Outras informações
                </Card.Text>
            </Container>
            {rcf && (<RFC RFC={rcf} />)}
            <Toast message={messageResponse} onclose={onClose} show={show} statusCode={statusCode} />

            <ModalQuote
                onHide={handleClose}
                show={ModalShow}
                children={<ChildrenModal
                    proposta={proposta}
                    handleCloseModal={handleClose}
                    protocolo={protocolo} />}
                title={'Envio de Proposta'} />
            <Container className="mt-3 mb-3">
                <div className="d-grid gap-2 w-100">
                    <Button variant="info" className="w-100" size="lg" onClick={sendProposal}>
                        {loading ? (<Spinner animation="border" />) : 'Aceitar Proposta'}
                    </Button>
                </div>
            </Container>
            <Container className="mt-3 mb-3 ">
                <Link to={'/'} className="text-info text-decoration-none">Fazer outra Cotação?</Link>
            </Container>
        </>
    )
}