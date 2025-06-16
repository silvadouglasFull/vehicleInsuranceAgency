import { Icon } from "@components/icons";
import { useGetMaxInstallments } from "@components/quote/suhai/coveragePlans/coverage/hooks/useGetMaxInstallments";
import { useGetExplanationForKeys } from "@components/quote/suhai/coveragePlans/coverage/hooks/useGetTitleExplanationForKeys";
import { Plot } from "@components/quote/suhai/coveragePlans/coverage/plot";
import { backGroundCard } from "@components/quote/suhai/coveragePlans/coverage/styles";
import type { CoberturaItem } from "@components/quote/suhai/coveragePlans/types";
import ModalQuote from "@components/quote/suhai/modal";
import { useShowModal } from '@components/quote/suhai/modal/hooks/useShowModal';
import type React from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Coverage: React.FC<CoberturaItem> = ({ Parcelamento, nome, premioLiquido }: CoberturaItem) => {
    const { Parcela } = Parcelamento
    const { plot } = useGetMaxInstallments(Parcela)
    const [classNameCard, setClassNameCard] = useState<string>('mb-4')
    const { handleShow, handleClose, show } = useShowModal()
    const titleValorIOF = useGetExplanationForKeys({ key: 'valorIOF' })
    const titlepremioLiquido = useGetExplanationForKeys({ key: 'premioLiquido' })
    const onMouseEnter = () => {
        setClassNameCard('mb-4 border-success')
    }
    const onMouseLeave = () => {
        setClassNameCard('mb-4')
    }
    const Children = () => {
        if (Parcela.length) {
            return Parcela.map(item => (
                <Plot key={item.quantidade} {...item} />
            ))
        }
        return <Card.Text>Não há parcelas para serem exibidas</Card.Text>
    }
    return (
        <Card className={classNameCard} style={{
            height: 500,
            cursor: 'pointer'
        }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Card.Header className="bg-success text-center border border-top-0 border-right-0 border-left-0"
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
                    <Icon name="fa-solid fa-trophy text-success" /> <strong className="text-secondary">Retorno do valor liquido do seguro:</strong> <span className="text-success">R$ {premioLiquido}</span>
                </Card.Text>
                {plot && (
                    <>
                        <Card.Text className="text-secondary" title={titleValorIOF}>
                            <Icon name="fa fa-solid fa-star text-success" /> IOF de <span className="text-success">R$ {plot?.valorIOF}</span>
                        </Card.Text>
                    </>
                )}
                {Parcela.length && (<Card.Text>
                    <Link onClick={handleShow} to={'#'} className="text-decoration-none text-success font-weight-bold">
                        <Icon name="fa fa-solid fa-eye text-success" /> Ver todas as possíveis parcelas
                    </Link>
                </Card.Text>)}
            </Card.Body>
            {plot && (
                <Card.Footer className="text-center border border-bottom-0 border-right-0 border-left-0" style={backGroundCard}>
                    <div className="d-flex justify-content-center align-items-center">
                        <Card.Title className="text-success mr-2 mt-2">
                            R$ {plot.valorTotal.toLocaleString()}
                        </Card.Title>
                        <span className="text-secondary">à vista</span>
                    </div>
                    <small className="text-secondary">
                        Em até {plot.quantidade}x de R$ {plot._value_1.toLocaleString()}
                    </small>
                    <div className="d-grid gap-2 w-100">
                        <Button variant="success" className="w-100" size="lg">
                            Aceitar Proposta
                        </Button>
                    </div>
                </Card.Footer>
            )}
            {plot && (
                <ModalQuote onHide={handleClose} show={show} children={<Children />} title={nome} />
            )}
        </Card>
    )
}