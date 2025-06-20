import { useGetPropsInput } from "@components/forms/suhai/insuranceQuote/hooks/useGetPropsInput";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/insuredData/context/hooks/insuranceQuote";
import { useFetchAddressInfo } from "@components/forms/suhai/insuranceQuote/insuredData/hooks/useFetchAddressInfo";
import { SelectSexo } from "@components/forms/suhai/insuranceQuote/insuredData/select/sexo";
import { Spinner } from "@components/spinner";
import { formatCep, formatCpf } from "@utils/transfomerText";
import type React from "react";
import { useMemo } from "react";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";

export const FormInsuredData: React.FC = () => {
    const additionalForms = useMemo(() => [28], []);
    const sliceStart = useMemo(() => 11, [])
    const sliceEnd = useMemo(() => 14, [])
    const props = useGetPropsInput({
        sliceStart,
        sliceEnd,
        additionalForms
    });
    const { onChange, handleForm, state: { cpf, endereco, cepPernoite } } = useInsuranceQuote()
    const { loading } = useFetchAddressInfo()

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
                    <Col sm={12} md={3} className="mb-3">
                        <Form.Group controlId={props?.cepPernoite?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.cepPernoite?.label}
                                {props?.cepPernoite?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={cepPernoite}
                                {...props?.cepPernoite}
                                id={String(props?.cepPernoite?.id)}
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
                            <InputGroup className="mb-3">
                                {loading ? (
                                    <InputGroup.Text id="loading-icon-input">
                                        <Spinner />
                                    </InputGroup.Text>
                                ) : null}
                                <Form.Control
                                    value={endereco}
                                    {...props?.endereco}
                                    id={props?.endereco?.id.toString()}
                                    onChange={onChange}
                                    aria-describedby="loading-icon-input"
                                />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
        </Card >
    )
}