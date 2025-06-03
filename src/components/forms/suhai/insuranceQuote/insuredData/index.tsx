import { formLabels } from "@components/forms/suhai/insuranceQuote/constants";
import { RenderFormSection } from "@components/forms/suhai/insuranceQuote/renderFormSection";
import type React from "react";

export const FormInsuredData: React.FC = () => {
    const seguradoFields = formLabels.slice(11, 14);
    return RenderFormSection({
        fields: seguradoFields, title: "Dados do Assegurado"
    })
}