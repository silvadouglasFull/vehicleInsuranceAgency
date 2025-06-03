import { formLabels } from "@components/forms/suhai/insuranceQuote/constants";
import { RenderFormSection } from "@components/forms/suhai/insuranceQuote/renderFormSection";
import type React from "react";

export const FormVehicleValue: React.FC = () => {
    const veiculoFields = formLabels.slice(8, 9);
    return RenderFormSection({
        fields: veiculoFields, title: "Valor do Veículo"
    })
}