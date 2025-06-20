import { paymentData } from "@components/forms/suhai/insuranceQuote/constants";
import { useGetPropsInput } from "@components/forms/suhai/insuranceQuote/hooks/useGetPropsInput";
import { SelectCodigoCobertura, SelectFormaPagamento, SelectTipoContratacao } from "@components/forms/suhai/insuranceQuote/paymentDetails/select";
import type React from "react";
import { useMemo } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
export const FormPaymentDetails: React.FC = () => {
    const additionalForms = useMemo(() => paymentData, []);
    const props = useGetPropsInput({
        additionalForms
    });
    return (
        <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-info text-white">
                <Card.Title className="mb-0">Informações de Pagamento</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group>
                            <Form.Label className="fw-bold" >
                                {props?.tipoContratacao?.label}
                                {props?.tipoContratacao?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectTipoContratacao
                                {...props?.tipoContratacao}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group>
                            <Form.Label className="fw-bold" >
                                {props?.formaPagamento?.label}
                                {props?.formaPagamento?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectFormaPagamento {...props?.formaPagamento} />
                        </Form.Group>
                    </Col>
                    <Col className="mb-3 col-12">
                        <Form.Group>
                            <Form.Label className="fw-bold" >
                                {props?.cdCobertura?.label}
                                {props?.cdCobertura?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectCodigoCobertura {...props?.cdCobertura} />
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
        </Card >
    )
}