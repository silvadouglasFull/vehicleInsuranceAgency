import type { InfoFipeProps } from "@components/quote/suhai/infoFipe/types"
import type React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
export const InfoFipe: React.FC<InfoFipeProps> = ({ fatorFipe, valorFipe, valorFipexFator }: InfoFipeProps) => {
    return (
        <Container className="mt-3">
            <Card.Title className="text-success">Informações sobre o Veículo</Card.Title>
            <Row>
                <Col>
                    <Card.Text>
                        <strong className="text-secondary">Valor FIPE:</strong> R$ {valorFipe}
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Text>
                        <strong className="text-secondary">Fator FIPE:</strong> {fatorFipe}%
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Text>
                        <strong className="text-secondary">Valor x Fator:</strong> R$ {valorFipexFator}
                    </Card.Text>
                </Col>
            </Row>
        </Container>
    )
}