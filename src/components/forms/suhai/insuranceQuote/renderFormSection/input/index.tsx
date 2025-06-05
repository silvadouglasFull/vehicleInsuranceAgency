import type { FormField } from "@components/forms/suhai/insuranceQuote/constants/types";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import type React from "react";
import { Col, Form } from "react-bootstrap";
import { RenderInputType } from "./renderInputType";
export const Input: React.FC<FormField> = ({
    id,
    idControll,
    label,
    required,
    name,
    placeholder,
    type,
    max,
    maxLength,
    min,
    ...rest }) => {
    const { onChange } = useInsuranceQuote()

    return (
        <Col md={6} className="mb-3" key={id} >
            <Form.Group controlId={idControll}>
                <Form.Label className="fw-bold" >
                    {label}
                    {required && <span className="text-danger ms-1" >* </span>}
                </Form.Label>
                <RenderInputType
                    props={{
                        idControll,
                        label,
                        required,
                        name,
                        placeholder,
                        type,
                        max,
                        maxLength,
                        min,
                        onChange: onChange,
                        ...rest
                    }}
                    type={type}
                />
            </Form.Group>
        </Col>
    )
}