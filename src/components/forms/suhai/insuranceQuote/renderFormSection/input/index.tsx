import type { FormField } from "@components/forms/suhai/insuranceQuote/constants/types";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/context/hooks/insuranceQuote";
import { Icon } from "@components/icons";
import { openLink } from "@utils/openLink";
import type React from "react";
import { Badge, Col, Form } from "react-bootstrap";
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
    helperLink,
    title,
    ...rest }) => {
    const { onChange } = useInsuranceQuote()
    const handleLink = () => {
        if (helperLink) {
            openLink({ link: helperLink })
        }
    }
    return (
        <Col md={6} className="mb-3" key={id} >
            <Form.Group controlId={idControll}>
                <Form.Label className="fw-bold" >
                    {label}
                    {required && <span className="text-danger ms-1" >* </span>}
                    {helperLink && title && <Badge style={{
                        cursor: 'pointer'
                    }} bg="info"
                        title={title} onClick={handleLink}>
                        <Icon name="fa-solid fa-circle-question text-light" />
                    </Badge>}
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