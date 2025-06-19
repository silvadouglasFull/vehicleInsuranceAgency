import { paymentData } from "@components/forms/suhai/insuranceQuote/constants";
import type { Type } from "@components/forms/suhai/insuranceQuote/constants/types";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { useGetPropsInput } from "@components/forms/suhai/insuranceQuote/hooks/useGetPropsInput";
import { SelectCodigoCobertura, SelectFormaPagamento, SelectTipoContratacao } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/paymentDetails";
import type React from "react";
import { useMemo } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
export const FormPaymentDetails: React.FC = () => {
    const types = useMemo<Type[]>(() => ['formaPagamento', 'text', 'tipoContratacao', 'cdCobertura'] as Type[], []);
    const additionalForms = useMemo(() => paymentData, []);
    const sliceStart = useMemo(() => 9, []);
    const sliceEnd = useMemo(() => 11, []);
    const props = useGetPropsInput({
        types,
        sliceStart,
        sliceEnd,
        additionalForms
    });
    const { state: {
        nome,
    }, onChange } = useInsuranceQuote()
    return (
        <Card bg="light" className="mb-4 shadow-sm">
            <Card.Header className="bg-info text-white">
                <Card.Title className="mb-0">Informações de Pagamento</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.tipoContratacao?.idControll}>
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
                        <Form.Group controlId={props?.formaPagamento?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.formaPagamento?.label}
                                {props?.formaPagamento?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectFormaPagamento {...props?.formaPagamento} />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.text?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.text?.label}
                                {props?.text?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={nome}
                                {...props?.text}
                                id={props?.text?.id.toString()}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.cdCobertura?.idControll}>
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