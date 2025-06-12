import type { Calculo } from "@components/quote/suhai/rcf/types"
import type React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"

export const RFC: React.FC<Calculo> = ({ RFC }: Calculo) => {
    const { premioDanosCorporais, premioDanosMateriais, premioDanosMorais } = RFC
    return (
        <Container className="mt-3">
            <Card.Title className="text-success">RCF (Responsabilidade Civil Facultativa)</Card.Title>
            <Row>
                <Col>
                    <Card.Text>
                        <strong className="text-secondary">Materiais:</strong> R$ {premioDanosMateriais}
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Text>
                        <strong className="text-secondary">Corporais:</strong> R$ {premioDanosCorporais}
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Text>
                        <strong className="text-secondary">Morais:</strong> R$ {premioDanosMorais}
                    </Card.Text>
                </Col>
            </Row>
        </Container>
    )
}