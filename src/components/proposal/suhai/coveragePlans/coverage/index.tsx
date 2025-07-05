import { Icon } from "@components/icons";
import { ChildrenModal } from "@components/proposal/suhai/coveragePlans/coverage/childrenModal";
import { useGetMaxInstallments } from "@components/proposal/suhai/coveragePlans/coverage/hooks/useGetMaxInstallments";
import { useGetExplanationForKeys } from "@components/proposal/suhai/coveragePlans/coverage/hooks/useGetTitleExplanationForKeys";
import { backGroundCard } from "@components/proposal/suhai/coveragePlans/coverage/styles";
import type { CoberturaItem } from "@components/proposal/suhai/coveragePlans/types";
import ModalQuote from "@components/proposal/suhai/modal/proposal";
import { useShowModal } from '@components/proposal/suhai/modal/proposal/hooks/useShowModal';
import type React from "react";
import { useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Coverage: React.FC<CoberturaItem> = ({
    Parcelamento,
    nome,
    premioLiquido,
    loading,
    sendProposal,
    name,
    setName
}: CoberturaItem) => {
    const { Parcela } = Parcelamento
    const { plot } = useGetMaxInstallments(Parcela)
    const [classNameCard, setClassNameCard] = useState<string>('mb-4')
    const { handleShow, handleClose, show } = useShowModal()
    const titleValorIOF = useGetExplanationForKeys({ key: 'valorIOF' })
    const titlepremioLiquido = useGetExplanationForKeys({ key: 'premioLiquido' })
    const onMouseEnter = () => {
        setClassNameCard('mb-4 border-info')
    }
    const onMouseLeave = () => {
        setClassNameCard('mb-4')
    }
    const onClick = () => {
        if (name === nome) {
            return setName('')
        }
        return setName(nome)
    }
    return (
        <Card className={(name === nome) ? 'mb-4 border-info' : classNameCard} style={{
            height: 500,
            cursor: 'pointer'
        }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
            <Card.Header className="bg-info text-center border border-top-0 border-right-0 border-left-0"
                style={{
                    ...backGroundCard,
                    height: 100
                }}>
                <Card.Text className="text-light">{nome}</Card.Text>
            </Card.Header>
            <Card.Body className="text-center">
                <Card.Text style={{
                    paddingTop: '20%'
                }}
                    title={titlepremioLiquido}
                >
                    <Icon name="fa-solid fa-trophy text-info" /> <strong className="text-secondary">Retorno do valor liquido do seguro:</strong> <span className="text-info">R$ {premioLiquido}</span>
                </Card.Text>
                {plot && (
                    <>
                        <Card.Text className="text-secondary" title={titleValorIOF}>
                            <Icon name="fa fa-solid fa-star text-info" /> IOF de <span className="text-info">R$ {plot?.valorIOF}</span>
                        </Card.Text>
                    </>
                )}
                {Parcela.length && (<Card.Text>
                    <Link onClick={handleShow} to={'#'} className="text-decoration-none text-info font-weight-bold">
                        <Icon name="fa fa-solid fa-eye text-info" /> Ver todas as possíveis parcelas
                    </Link>
                </Card.Text>)}
            </Card.Body>
            {plot && (
                <Card.Footer className="text-center border border-bottom-0 border-right-0 border-left-0" style={backGroundCard}>
                    <div className="d-flex justify-content-center align-items-center">
                        <Card.Title className="text-info me-2 mt-2">
                            R$ {plot.valorTotal.toLocaleString()}
                        </Card.Title>
                        <span className="text-secondary">à vista</span>
                    </div>
                    <small className="text-secondary">
                        Em até {plot.quantidade}x de R$ {plot._value_1.toLocaleString()}
                    </small>
                    <div className="d-grid gap-2 w-100">
                        <Button variant="info" className="w-100" size="lg" onClick={sendProposal}>
                            {loading ? (<Spinner animation="border" />) : 'Aceitar Proposta'}
                        </Button>
                    </div>
                </Card.Footer>
            )}
            {plot && (
                <ModalQuote onHide={handleClose} show={show} children={<ChildrenModal Parcela={Parcela} />} title={nome} />
            )}
        </Card>
    )
}