/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FormProps } from "@components/forms/suhai/insuranceQuote/constants/types";
import { useFetchAddressInfo } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllAddress/hooks/useFetchAddressInfo";
import type React from "react";
import { Form } from "react-bootstrap";

export const RenderFormControllAdress: React.FC<FormProps> = (props: FormProps) => {
    const { infoAddress, value } = useFetchAddressInfo()
    const { type, ...rest } = props
    if (infoAddress?.logradouro) {
        return (
            <Form.Control value={value} type="text" {...rest} />
        )
    }
    return (
        <Form.Control type="text" value={value} {...rest} />
    )
}