import { formLabels } from "@components/forms/suhai/insuranceQuote/constants";
import { RenderFormSection } from "@components/forms/suhai/insuranceQuote/renderFormSection";
import type React from "react";

export const FormPaymentDetails: React.FC = () => {
    const pagamentoFields = formLabels.slice(9, 11);
    return RenderFormSection({
        fields: pagamentoFields, title: "Informações de Pagamento"
    })
}