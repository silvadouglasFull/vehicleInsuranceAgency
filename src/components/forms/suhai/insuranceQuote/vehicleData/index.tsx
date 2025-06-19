import { vehicleData } from "@components/forms/suhai/insuranceQuote/constants";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { useGetPropsInput } from "@components/forms/suhai/insuranceQuote/hooks/useGetPropsInput";
import { FormControllCodFipe } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllCodFipe";
import { SelectBrand, SelectModel, SelectOutroVeiculo, SelectTipoUtilizacao, SelectZero } from "@components/forms/suhai/insuranceQuote/vehicleData/select";
import { Icon } from "@components/icons";
import type React from "react";
import { useMemo } from "react";
import { Badge, Card, Col, Form, Row } from "react-bootstrap";
export const FormVehicleData: React.FC = () => {
    const additionalForms = useMemo(() => vehicleData, []);
    const sliceStart = useMemo(() => 0, []);
    const sliceEnd = useMemo(() => 4, []);
    const props = useGetPropsInput({
        sliceStart,
        sliceEnd,
        additionalForms,
        keyGet: 'name'
    });
    const { state, onChange } = useInsuranceQuote()
    const {
        valor,
        placa,
        chassi
    } = state
    const handleLink = () => {
        if (props?.codigoFipe?.helperLink) {
            window.open(props?.codigoFipe?.helperLink)
        }
    }
    return (
        <Card bg="light" className="mb-4 shadow-sm">
            <Card.Header className="bg-info text-white">
                <Card.Title className="mb-0">Dados do Seu Veículo</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col className="mb-3 col-12">
                        <Form.Group controlId={props?.codigoFipe?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.codigoFipe?.label}
                                {props?.codigoFipe?.required && <span className="text-danger ms-1" >* </span>}
                                {props?.codigoFipe?.helperLink && props?.codigoFipe?.title && <Badge style={{
                                    cursor: 'pointer'
                                }} bg="info"
                                    title={props?.codigoFipe?.title} onClick={handleLink}>
                                    <Icon name="fa-solid fa-circle-question text-light" />
                                </Badge>}
                            </Form.Label>
                            <FormControllCodFipe {...props?.codigoFipe} onChange={onChange} />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.marca?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.marca?.label}
                                {props?.marca?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectBrand  {...props.marca} />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.modelo?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.modelo?.label}
                                {props?.modelo?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectModel {...props?.modelo} />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={3} className="mb-3">
                        <Form.Group controlId={props?.valor?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.valor?.label}
                                {props?.valor?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={valor}
                                {...props?.valor}
                                id={props?.valor?.id.toString()}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={3} className="mb-3">
                        <Form.Group controlId={props?.placa?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.placa?.label}
                                {props?.placa?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={placa}
                                {...props?.placa}
                                id={props?.placa?.id.toString()}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={3} className="mb-3">
                        <Form.Group controlId={props?.zeroKm?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.zeroKm?.label}
                                {props?.zeroKm?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectZero {...props?.zeroKm} />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={3} className="mb-3">
                        <Form.Group controlId={props?.chassi?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.chassi?.label}
                                {props?.chassi?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={chassi}
                                {...props?.chassi}
                                id={props?.chassi?.id.toString()}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.tipoUtilizacao?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.tipoUtilizacao?.label}
                                {props?.tipoUtilizacao?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectTipoUtilizacao {...props?.tipoUtilizacao} />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group controlId={props?.possuiOutroVeic?.idControll}>
                            <Form.Label className="fw-bold" >
                                {props?.possuiOutroVeic?.label}
                                {props?.possuiOutroVeic?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectOutroVeiculo {...props?.possuiOutroVeic} />
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}