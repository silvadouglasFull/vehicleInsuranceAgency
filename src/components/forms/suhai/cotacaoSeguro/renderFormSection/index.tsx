import type { States } from "@components/forms/suhai/cotacaoSeguro/context/types";
import { useInsuranceQuote } from "@components/forms/suhai/cotacaoSeguro/hooks/cotacaoSeguro";
import type { TRenderFormSection } from "@components/forms/suhai/cotacaoSeguro/renderFormSection/types";
import type React from "react";
import { Card, Col, Form, Row } from 'react-bootstrap';

export const RenderFormSection: React.FC<TRenderFormSection> = ({ fields, title }: TRenderFormSection) => {
    const { state, onChange } = useInsuranceQuote()
    return (
        <Card bg="light" className="mb-4 shadow-sm">
            <Card.Header className="bg-success text-white">
                <Card.Title className="mb-0">{title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    {fields.map((field) => (
                        <Col md={6} className="mb-3" key={field.id}>
                            <Form.Group controlId={field.idControll}>
                                <Form.Label className="fw-bold">
                                    {field.label}
                                    {field.required && <span className="text-danger ms-1">*</span>}
                                </Form.Label>
                                <Form.Control
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    value={state[field.name as keyof States]}
                                    onChange={onChange}
                                />
                            </Form.Group>
                        </Col>
                    ))}
                </Row>
            </Card.Body>
        </Card>
    )
}