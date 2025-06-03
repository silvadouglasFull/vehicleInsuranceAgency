import { FormLayout } from "@components/forms/suhai/insuranceQuote/layouts";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export const FormInsuranceQuote: React.FC = () => {
    return (
        <div className="bg-light min-vh-100 py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} xl={10}>
                        <div className="text-center mb-5">
                            <Card.Title className="display-4 text-success fw-bold mb-3">
                                Cotação de Seguro Auto
                            </Card.Title>
                            <Card.Text className="lead text-muted">
                                Preencha os dados abaixo para receber sua cotação personalizada
                            </Card.Text>
                        </div>

                        <FormLayout />

                        <div className="text-center mt-4">
                            <small className="text-muted">
                                <span className="text-danger">*</span> Campos obrigatórios
                            </small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
