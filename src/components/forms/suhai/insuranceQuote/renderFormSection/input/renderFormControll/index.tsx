import type { FormProps } from "@components/forms/suhai/insuranceQuote/constants/types";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import type React from "react";
import { Form } from "react-bootstrap";

export const FormControll: React.FC<FormProps> = (props: FormProps) => {
    const { state } = useInsuranceQuote()
    return (
        <Form.Control value={state[props.name as keyof typeof state]} {...props} />
    )
}