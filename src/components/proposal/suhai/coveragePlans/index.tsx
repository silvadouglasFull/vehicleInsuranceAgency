import { Coverage } from "@components/proposal/suhai/coveragePlans/coverage";
import type { Calculo } from "@components/proposal/suhai/coveragePlans/types";
import type React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
export const CovaragePlans: React.FC<Calculo> = ({ PremioCoberturas, sendProposal }: Calculo) => {
    const { Cobertura } = PremioCoberturas
    return (
        <Container className="mt-5">
            <Card.Title className="text-info">Planos de Cobertura</Card.Title>
            <Row>
                {Cobertura.length ? Cobertura.map(item => (
                    <Col key={item.id} sm={12} md={4}>
                        <Coverage {...item}
                            sendProposal={sendProposal} />
                    </Col>
                )) : null}
            </Row>
        </Container>
    )
}