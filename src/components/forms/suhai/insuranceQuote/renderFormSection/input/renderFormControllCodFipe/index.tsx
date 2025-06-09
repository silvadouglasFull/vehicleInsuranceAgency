/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FormProps } from "@components/forms/suhai/insuranceQuote/constants/types";
import { useFormatCodFipe } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllCodFipe/hooks/useFormatCodFipe";
import type React from "react";
import { Form } from "react-bootstrap";

export const FormControllCodFipe: React.FC<FormProps> = (props: FormProps) => {
    const { value } = useFormatCodFipe()
    const { type, ...rest } = props
    return (
        <Form.Control value={value} type="text" {...rest} />
    )
}