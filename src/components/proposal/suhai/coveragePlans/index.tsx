import { Coverage } from "@components/proposal/suhai/coveragePlans/coverage";
import type { Calculo } from "@components/proposal/suhai/coveragePlans/types";
import type React from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
export const CovaragePlans: React.FC<Calculo> = ({ PremioCoberturas, loading, sendProposal }: Calculo) => {
    const { Cobertura } = PremioCoberturas
    const [name, setName] = useState<string>('')
    return (
        <Container className="mt-5">
            <Card.Title className="text-info mb-3">Planos de Cobertura</Card.Title>
            <Row className="d-flex flex-wrap justify-content-md-center">
                {Cobertura.length ? Cobertura.map(item => (
                    <Col key={item.id} sm={12} md={3} className="m-3">
                        <Coverage
                            {...item}
                            loading={loading}
                            sendProposal={sendProposal}
                            name={name}
                            setName={setName}
                        />
                    </Col>
                )) : null}
            </Row>
        </Container>
    )
}