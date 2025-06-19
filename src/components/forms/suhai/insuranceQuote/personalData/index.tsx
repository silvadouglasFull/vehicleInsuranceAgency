import { personalData } from "@components/forms/suhai/insuranceQuote/constants";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { useGetPropsInput } from "@components/forms/suhai/insuranceQuote/hooks/useGetPropsInput";
import { SelectEstadoCivil, SelectSexo } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/personalData";
import { formatPhoneNumber } from "@utils/form/mask/phone";
import { formatCep, formatCpf } from "@utils/transfomerText";
import type React from "react";
import { useMemo } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
export const FormPersonalData: React.FC = () => {
    const additionalForms = useMemo(() => personalData, []);
    const sliceStart = useMemo(() => 4, []);
    const sliceEnd = useMemo(() => 8, []);
    const props = useGetPropsInput({
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
    }, onChange, handleForm } = useInsuranceQuote()
    const onBlurCPF = () => {
        if (cpf) {
            handleForm({
                cpf: formatCpf({ cpf })
            })
        }
    }
    const onBlurCEP = () => {
        if (cepPernoite) {
            const cep = cepPernoite
            handleForm({
                cepPernoite: formatCep({ cep })
            })
        }
    }
    const onBlurTelefone = () => {
        if (telefone) {
            handleForm({
                telefone: formatPhoneNumber(telefone, 'pt')
            })
        }
    }
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
                                onBlur={onBlurCPF}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.dtNascimento?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.dtNascimento?.label}
                                {props?.dtNascimento?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={dtNascimento}
                                {...props?.dtNascimento}
                                id={props?.dtNascimento?.id.toString()}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col className="mb-3 col-12">
                        <Form.Group controlId={props?.nome?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.nome?.label}
                                {props?.nome?.required && <span className="text-danger ms-1" >* </span>}
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
                                onBlur={onBlurTelefone}
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
                                onBlur={onBlurCEP}
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