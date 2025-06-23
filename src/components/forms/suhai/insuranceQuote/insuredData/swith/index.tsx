
import { useCopyForm } from "@components/forms/suhai/insuranceQuote/insuredData/swith/hooks/useCopyForm";
import type React from 'react';
import Form from 'react-bootstrap/Form';

export const SwitchCopyForm: React.FC = () => {
    const { onChange, value } = useCopyForm()
    return (
        <Form.Check
            type="switch"
            onChange={onChange}
            id="custom-switch"
            label="Usar os mesmos dados do formulário Dados Pessoais?"
            checked={value}
        />
    );
}
