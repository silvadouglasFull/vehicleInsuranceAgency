import { garageData } from "@components/forms/suhai/insuranceQuote/constants";
import type { Type } from "@components/forms/suhai/insuranceQuote/constants/types";
import { useGetPropsInput } from "@components/forms/suhai/insuranceQuote/hooks/useGetPropsInput";
import { SelectPergunta1, SelectPergunta2, SelectPergunta3, SelectPergunta4 } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/garageData";
import type React from "react";
import { useMemo } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

export const FormGarageData: React.FC = () => {
    const types = useMemo<Type[]>(() => ['pergunta1', 'pergunta2', 'pergunta3', "pergunta4"] as Type[], []);
    const memoGarageData = useMemo(() => garageData, []);

    const props = useGetPropsInput({
        types,
        additionalForms: memoGarageData
    });
    return (
        <Card bg="light" className="mb-4 shadow-sm">
            <Card.Header className="bg-info text-white">
                <Card.Title className="mb-0">Informações sobre sua Garagem</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.pergunta1?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.pergunta1?.label}
                                {props?.pergunta1?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectPergunta1 {...props?.pergunta1} />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.pergunta2?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.pergunta2?.label}
                                {props?.pergunta2?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectPergunta2 {...props?.pergunta2} />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.pergunta3?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.pergunta3?.label}
                                {props?.pergunta3?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectPergunta3 {...props?.pergunta3} />
                        </Form.Group>
                    </Col>

                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.pergunta4?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.pergunta4?.label}
                                {props?.pergunta4?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectPergunta4 {...props?.pergunta4} />
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}