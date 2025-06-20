import { mainDriverData } from "@components/forms/suhai/insuranceQuote/constants";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/context/hooks/insuranceQuote";
import { useGetPropsInput } from "@components/forms/suhai/insuranceQuote/hooks/useGetPropsInput";
import { SelectEstadoCivilPrincipalCondutor, SelectSexoPrincipalCondutor } from "@components/forms/suhai/insuranceQuote/mainDriverData/select";
import type React from "react";
import { useMemo } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
export const FormMainDriveData: React.FC = () => {
    const additionalForms = useMemo(() => mainDriverData, []);
    const props = useGetPropsInput({
        additionalForms
    });
    const { state: {
        dtNascimentoPrincipalCondutor,
    }, onChange } = useInsuranceQuote()
    return (
        <Card bg="light" className="mb-4 shadow-sm">
            <Card.Header className="bg-info text-white">
                <Card.Title className="mb-0">Dados do Principal Condutor</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col sm={12} md={4} className="mb-3 col-12">
                        <Form.Group>
                            <Form.Label className="fw-bold" >
                                {props?.dtNascimentoPrincipalCondutor?.label}
                                {props?.dtNascimentoPrincipalCondutor?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                {...props?.dtNascimentoPrincipalCondutor}
                                id={props.dtNascimentoPrincipalCondutor?.id?.toString()}
                                value={dtNascimentoPrincipalCondutor}
                                onChange={onChange}
                                max={new Date().toISOString().split("T")[0]}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={4} className="mb-3">
                        <Form.Group>
                            <Form.Label className="fw-bold" >
                                {props?.sexoPrincipalCondutor?.label}
                                {props?.sexoPrincipalCondutor?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectSexoPrincipalCondutor
                                {...props?.sexoPrincipalCondutor}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={4} className="mb-3">
                        <Form.Group>
                            <Form.Label className="fw-bold" >
                                {props?.estadoCivilPrincipalCondutor?.label}
                                {props?.estadoCivilPrincipalCondutor?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectEstadoCivilPrincipalCondutor
                                {...props?.estadoCivilPrincipalCondutor}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
        </Card >
    )
}