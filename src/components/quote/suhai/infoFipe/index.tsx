import type { InfoFipeProps } from "@components/quote/suhai/infoFipe/types"
import type React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
export const InfoFipe: React.FC<InfoFipeProps> = ({ fatorFipe, valorFipe, valorFipexFator }: InfoFipeProps) => {
    return (
        <Container className="mt-3">
            <Card.Title className="text-info">Informações sobre o Veículo</Card.Title>
            <Row>
                <Col>
                    <Card.Text>
                        <strong className="text-secondary">Valor do veículo segundo a tabela FIPE:</strong> <span className="text-info font-weight-bold">R$ {valorFipe}</span>
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Text>
                        <strong className="text-secondary">A Porcentagem do valor que será restituído ao segurado em caso de indenização:</strong> {fatorFipe}%
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Text>
                        <strong className="text-secondary">O valor que será restituído ao segurado em caso de indenização:</strong> <span className="text-info font-weight-bold"> R$ {valorFipexFator}</span>
                    </Card.Text>
                </Col>
            </Row>
        </Container>
    )
}