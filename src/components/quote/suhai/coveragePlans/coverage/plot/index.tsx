import type { Parcela } from "@components/quote/suhai/coveragePlans/types";
import { Card, Col, Container, Row } from "react-bootstrap";
export const Plot = ({ _value_1, quantidade, valorIOF, valorJuros, valorTotal }: Parcela) => {
    return (
        <Container fluid>
            <Row>
                <Col sm={4} className="mb-3">
                    <Card.Text><strong className="text-secondary">{quantidade}x</strong> de R$ {_value_1.toFixed(2)}</Card.Text>
                </Col>

                <Col sm={4} className="mb-3">
                    <Card.Text>
                        <strong className="text-secondary">
                            IOF:
                        </strong> R$ {valorIOF.toFixed(2)}</Card.Text>
                </Col>
                <Col sm={4} className="mb-3">
                    <Card.Text> <strong className="text-secondary">Juros:</strong> R$ {valorJuros.toFixed(2)}</Card.Text>
                </Col>
            </Row>
            <Row className="text-center">
                <Col className="mb-3">
                    <Card.Title className="text-success">
                        R$ {valorTotal.toFixed(2)}
                    </Card.Title>
                </Col>
            </Row>
            <hr />
        </Container >
    )
}