/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FormProps } from "@components/forms/suhai/insuranceQuote/constants/types";
import { useFormatPhone } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllPhone/hooks/useFormatPhone";
import type React from "react";
import { Form } from "react-bootstrap";

export const RenderFormControllPhone: React.FC<FormProps> = (props: FormProps) => {
    const { value } = useFormatPhone()
    const { type, ...rest } = props
    return (
        < Form.Control value={value} type="text" {...rest} />
    )
}