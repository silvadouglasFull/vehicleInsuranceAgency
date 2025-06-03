import { formLabels } from "@components/forms/suhai/insuranceQuote/constants";
import { RenderFormSection } from "@components/forms/suhai/insuranceQuote/renderFormSection";
import type React from "react";

export const FormPersonalData: React.FC = () => {
    const pessoalFields = formLabels.slice(4, 8);
    return RenderFormSection({
        fields: pessoalFields, title: "Dados Pessoais"
    })
}