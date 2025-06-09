import { paymentData } from "@components/forms/suhai/insuranceQuote/constants";
import { RenderFormSection } from "@components/forms/suhai/insuranceQuote/renderFormSection";
import { listForms } from "@components/forms/suhai/insuranceQuote/utils/listForms";
import type React from "react";
export const FormPaymentDetails: React.FC = () => {
    const pagamentoFields = listForms({ additionalForms: paymentData, sliceEnd: 11, sliceStart: 9 });
    return RenderFormSection({
        fields: pagamentoFields, title: "Informações de Pagamento"
    })
}