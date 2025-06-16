import type { Calculo } from "@components/proposal/suhai/rcf/types"
import type React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"

export const RFC: React.FC<Calculo> = ({ RFC }: Calculo) => {
    const { premioDanosCorporais, premioDanosMateriais, premioDanosMorais } = RFC
    return (
        <Container className="mt-3">
            <Card.Title className="text-info">RCF (Responsabilidade Civil Facultativa)</Card.Title>
            <Row>
                <Col>
                    <Card.Text>
                        <strong className="text-secondary">Materiais:</strong> <span className="text-info font-weight-bold">R$ {premioDanosMateriais}</span>
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Text>
                        <strong className="text-secondary">Corporais:</strong> <span className="text-info font-weight-bold">R$ {premioDanosCorporais}</span>
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Text>
                        <strong className="text-secondary">Morais:</strong> <span className="text-info font-weight-bold">R$ {premioDanosMorais}</span>
                    </Card.Text>
                </Col>
            </Row>
        </Container>
    )
}