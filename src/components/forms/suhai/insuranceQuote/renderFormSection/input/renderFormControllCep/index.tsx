/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FormProps } from "@components/forms/suhai/insuranceQuote/constants/types";
import { useFormatCEP } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllCep/hooks/useFormatCEP";
import type React from "react";
import { Form } from "react-bootstrap";

export const FormControllCEP: React.FC<FormProps> = (props: FormProps) => {
    const { value } = useFormatCEP()
    const { type, ...rest } = props
    return (
        <Form.Control value={value} type="text" {...rest} />
    )
}