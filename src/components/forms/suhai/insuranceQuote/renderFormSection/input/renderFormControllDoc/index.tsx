/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FormProps } from "@components/forms/suhai/insuranceQuote/constants/types";
import { useFormatDoc } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllDoc/hooks/useFormatDoc";
import type React from "react";
import { Form } from "react-bootstrap";

export const FormControllDoc: React.FC<FormProps> = (props: FormProps) => {
    const { value } = useFormatDoc()
    const { type, ...rest } = props
    return (
        <Form.Control value={value} type="text" {...rest} />
    )
}