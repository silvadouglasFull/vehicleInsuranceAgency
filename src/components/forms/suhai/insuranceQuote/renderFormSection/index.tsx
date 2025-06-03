import type { States } from "@components/forms/suhai/insuranceQuote/context/types";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import type { TRenderFormSection } from "@components/forms/suhai/insuranceQuote/renderFormSection/types";
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
                    {fields.sort((a, b) => a.id - b.id).map(({ id, idControll, label, name, placeholder, required, type, ...rest }) => (
                        <Col md={6} className="mb-3" key={id}>
                            <Form.Group controlId={idControll}>
                                <Form.Label className="fw-bold">
                                    {label}
                                    {required && <span className="text-danger ms-1">*</span>}
                                </Form.Label>
                                <Form.Control
                                    type={type}
                                    name={name}
                                    placeholder={placeholder}
                                    required={required}
                                    value={state[name as keyof States]}
                                    onChange={onChange}
                                    tabIndex={id}
                                    {...rest}
                                />
                            </Form.Group>
                        </Col>
                    ))}
                </Row>
            </Card.Body>
        </Card>
    )
}