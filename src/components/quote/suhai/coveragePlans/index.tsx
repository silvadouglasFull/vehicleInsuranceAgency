import type { Calculo } from "@components/quote/suhai/coveragePlans/types";
import type React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Coverage } from "./coverage";
export const CovaragePlans: React.FC<Calculo> = ({ PremioCoberturas }: Calculo) => {
    const { Cobertura } = PremioCoberturas
    return (
        <Container className="mt-5">
            <Card.Title className="text-success">Planos de Cobertura</Card.Title>
            <Row>
                {Cobertura.length ? Cobertura.map(item => (
                    <Col key={item.id} md={4}>
                        <Coverage {...item} />
                    </Col>
                )) : null}
            </Row>
        </Container>
    )
}