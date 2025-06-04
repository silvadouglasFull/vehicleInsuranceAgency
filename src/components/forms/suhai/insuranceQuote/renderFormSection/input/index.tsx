import type { FormField } from "@components/forms/suhai/insuranceQuote/constants/types";
import type { States } from "@components/forms/suhai/insuranceQuote/context/types";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { useVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useVehicleData";
import { Spinner } from "@components/spinner";
import type React from "react";
import { Col, Form } from "react-bootstrap";

export const Input: React.FC<FormField> = ({ id, idControll, label, name, placeholder, required, type, ...rest }) => {
    const { state, onChange } = useInsuranceQuote()
    const { loading } = useVehicleData()
    return (
        <Col md={6} className="mb-3" key={id} >
            <Form.Group controlId={idControll}>
                <Form.Label className="fw-bold" >
                    {label}
                    {required && <span className="text-danger ms-1" >* </span>}
                    {loading && <Spinner />}
                </Form.Label>
                < Form.Control
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
    )
}