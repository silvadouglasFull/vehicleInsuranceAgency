import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { useGetPropsInput } from "@components/forms/suhai/insuranceQuote/hooks/useGetPropsInput";
import { SelectSexo } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/personalData/sexo";
import { formatCpf } from "@utils/transfomerText";
import type React from "react";
import { useMemo } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

export const FormInsuredData: React.FC = () => {
    const additionalForms = useMemo(() => [], []);
    const sliceStart = useMemo(() => 11, [])
    const sliceEnd = useMemo(() => 14, [])
    const props = useGetPropsInput({
        sliceStart,
        sliceEnd,
        additionalForms
    });
    const { onChange, handleForm, state: { cpf, endereco } } = useInsuranceQuote()
    const onBlurCPF = () => {
        if (cpf) {
            handleForm({
                cpf: formatCpf({ cpf })
            })
        }
    }
    return (
        <Card bg="light" className="mb-4 shadow-sm">
            <Card.Header className="bg-info text-white">
                <Card.Title className="mb-0">Dados do Assegurado</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.cpf?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.cpf?.label}
                                {props?.cpf?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={formatCpf({ cpf: cpf ?? '' })}
                                {...props?.cpf}
                                id={String(props?.cpf?.id)}
                                onChange={onChange}
                                onBlur={onBlurCPF}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.sexo?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.sexo?.label}
                                {props?.sexo?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectSexo {...props?.sexo} />
                        </Form.Group>
                    </Col>
                    <Col className="mb-3 col-12">
                        <Form.Group controlId={props?.endereco?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.endereco?.label}
                                {props?.endereco?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={endereco}
                                {...props?.endereco}
                                id={String(props?.endereco?.id)}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
        </Card >
    )
}