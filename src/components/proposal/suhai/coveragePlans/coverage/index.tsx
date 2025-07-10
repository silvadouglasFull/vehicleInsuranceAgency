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
        <Card className={(name === nome) ? 'mb-4 border-info shadow bg-body rounded' : `${classNameCard} shadow bg-body rounded`} style={{
            height: 500,
            width: '18rem',
            cursor: 'pointer'
        }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
            <Card.Body className="d-flex flex-column text-center justify-content-center align-items-center">
                {plot && (

                    <>
                        <div className="d-flex justify-content-center align-items-center">
                            <Card.Title className="text-info me-2 mt-2">
                                R$ {plot.valorTotal.toLocaleString()}
                            </Card.Title>
                            <span className="text-secondary">à vista</span>
                        </div>
                        <small className="text-secondary">
                            Em até {plot.quantidade}x de R$ {plot._value_1.toLocaleString()}
                        </small>
                    </>
                )}
                <Card.Text className="text-dark fw-bold mt-3">{nome}</Card.Text>
                <Card.Text title={titlepremioLiquido}>
                    <Icon name="fa-solid fa-trophy text-info" /> <strong className="text-secondary">Valor do Seguro:</strong> <span className="text-info">R$ {premioLiquido}</span>
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
            <Card.Footer className="text-center border border-0" style={backGroundCard}>
                <div className="d-grid gap-2 w-100">
                    <Button variant="outline-info" className="w-100 text-uppercase" size="lg" onClick={sendProposal}>
                        {loading ? (<Spinner animation="border" />) : 'Quero Esse'}
                    </Button>
                </div>
            </Card.Footer>
            {plot && (
                <ModalQuote onHide={handleClose} show={show} children={<ChildrenModal Parcela={Parcela} />} title={nome} />
            )}
        </Card>
    )
}