import { personalData } from "@components/forms/suhai/insuranceQuote/constants";
import type { Type } from "@components/forms/suhai/insuranceQuote/constants/types";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { useGetPropsInput } from "@components/forms/suhai/insuranceQuote/hooks/useGetPropsInput";
import { SelectEstadoCivil, SelectSexo } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/personalData";
import type React from "react";
import { useMemo } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
export const FormPersonalData: React.FC = () => {
    const types = useMemo<Type[]>(() => ['cpf', 'text', 'email', 'telefone', 'endereco', 'sexo', 'estadoCivil', 'cepPernoite', 'date'] as Type[], []);
    const additionalForms = useMemo(() => personalData, []);
    const sliceStart = useMemo(() => 4, []);
    const sliceEnd = useMemo(() => 8, []);
    const props = useGetPropsInput({
        types,
        sliceStart,
        sliceEnd,
        additionalForms
    });
    const { state: {
        cpf,
        nome,
        email,
        telefone,
        endereco,
        dtNascimento,
        cepPernoite
    }, onChange } = useInsuranceQuote()
    console.log(props)
    return (
        <Card bg="light" className="mb-4 shadow-sm">
            <Card.Header className="bg-info text-white">
                <Card.Title className="mb-0">Dados Pessoais</Card.Title>
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
                                value={cpf}
                                {...props?.cpf}
                                id={props?.cpf?.id.toString()}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.date?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.date?.label}
                                {props?.date?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={dtNascimento}
                                {...props?.date}
                                id={props?.date?.id.toString()}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col className="mb-3 col-12">
                        <Form.Group controlId={props?.text?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.text?.label}
                                {props?.text?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={nome}
                                {...props?.nome}
                                id={props?.nome?.id.toString()}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.telefone?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.telefone?.label}
                                {props?.telefone?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={telefone}
                                {...props?.telefone}
                                id={props?.telefone?.id.toString()}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.email?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.email?.label}
                                {props?.email?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={email}
                                {...props?.email}
                                id={props?.email?.id.toString()}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={9} className="mb-3">
                        <Form.Group controlId={props?.endereco?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.endereco?.label}
                                {props?.endereco?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={endereco}
                                {...props?.endereco}
                                id={props?.endereco?.id.toString()}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={3} className="mb-3">
                        <Form.Group controlId={props?.cepPernoite?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.cepPernoite?.label}
                                {props?.cepPernoite?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={cepPernoite}
                                {...props?.cepPernoite}
                                id={props?.cepPernoite?.id.toString()}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.estadoCivil?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.estadoCivil?.label}
                                {props?.estadoCivil?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectEstadoCivil {...props?.estadoCivil} />
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
                </Row>
            </Card.Body>
        </Card>
    )
}