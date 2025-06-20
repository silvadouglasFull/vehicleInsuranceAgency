import { VehicleTypeCards } from "@components/cards/vehicleType";
import { vehicleData } from "@components/forms/suhai/insuranceQuote/constants";
import { useGetPropsInput } from "@components/forms/suhai/insuranceQuote/hooks/useGetPropsInput";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/vehicleData/context/hooks/insuranceQuote";
import { SelectBrand, SelectModel, SelectOutroVeiculo, SelectTipoUtilizacao, SelectZero } from "@components/forms/suhai/insuranceQuote/vehicleData/select";
import { Icon } from "@components/icons";
import { maskCodFipe, onlyNumbers } from "@utils/transfomerText";
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
    const { state, onChange, handleForm } = useInsuranceQuote()
    const {
        valor,
        placa,
        chassi,
        codigoFipe,
        anoModelo
    } = state
    const handleLink = () => {
        if (props?.codigoFipe?.helperLink) {
            window.open(props?.codigoFipe?.helperLink)
        }
    }
    const onBlurCodigoFipe = () => {
        if ((codigoFipe ?? '').length <= 7) {
            handleForm({
                codigoFipe: maskCodFipe({ codFipe: codigoFipe ?? '' })
            })
        }
    }
    const onBlurValor = () => {
        if (valor) {
            handleForm({
                valor: String(Number(onlyNumbers(valor ?? '0')).toLocaleString())
            })
        }
    }
    const onBlurPlaca = () => {
        if (placa) {
            handleForm({
                placa: placa.toUpperCase()
            })
        }
    }
    return (
        <Card bg="light" className="mb-4 shadow-sm">
            <Card.Header className="bg-info text-white">
                <Card.Title className="mb-0">Dados do Seu Veículo</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text className="text-info">Qual é o tipo do seu veículo?</Card.Text>
                <VehicleTypeCards />
                <Row>
                    <Col className="mb-3 col-12">
                        <Form.Group>
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
                            <Form.Control
                                value={codigoFipe}
                                {...props?.codigoFipe}
                                id={props?.codigoFipe?.id.toString()}
                                onChange={onChange}
                                onBlur={onBlurCodigoFipe}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={4} className="mb-3">
                        <Form.Group>
                            <Form.Label className="fw-bold" >
                                {props?.marca?.label}
                                {props?.marca?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectBrand  {...props.marca} />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={4} className="mb-3">
                        <Form.Group>
                            <Form.Label className="fw-bold" >
                                {props?.modelo?.label}
                                {props?.modelo?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectModel {...props?.modelo} />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={4} className="mb-3">
                        <Form.Group>
                            <Form.Label className="fw-bold" >
                                {props?.anoModelo?.label}
                                {props?.anoModelo?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={anoModelo}
                                {...props?.anoModelo}
                                id={props?.anoModelo?.id.toString()}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={3} className="mb-3">
                        <Form.Group>
                            <Form.Label className="fw-bold" >
                                {props?.valor?.label}
                                {props?.valor?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={valor}
                                {...props?.valor}
                                id={props?.valor?.id.toString()}
                                onChange={onChange}
                                onBlur={onBlurValor}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={3} className="mb-3">
                        <Form.Group>
                            <Form.Label className="fw-bold" >
                                {props?.placa?.label}
                                {props?.placa?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <Form.Control
                                value={placa}
                                {...props?.placa}
                                id={props?.placa?.id.toString()}
                                onChange={onChange}
                                onBlur={onBlurPlaca}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={3} className="mb-3">
                        <Form.Group>
                            <Form.Label className="fw-bold" >
                                {props?.zeroKm?.label}
                                {props?.zeroKm?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectZero {...props?.zeroKm} />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={3} className="mb-3">
                        <Form.Group>
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
                        <Form.Group>
                            <Form.Label className="fw-bold" >
                                {props?.tipoUtilizacao?.label}
                                {props?.tipoUtilizacao?.required && <span className="text-danger ms-1" >* </span>}
                            </Form.Label>
                            <SelectTipoUtilizacao {...props?.tipoUtilizacao} />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Group>
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