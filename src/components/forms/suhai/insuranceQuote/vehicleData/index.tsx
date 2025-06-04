import { formLabels } from "@components/forms/suhai/insuranceQuote/constants";
import { RenderFormSection } from "@components/forms/suhai/insuranceQuote/renderFormSection";
import type React from "react";

export const FormVehicleData: React.FC = () => {
    const veiculoFields = formLabels.slice(0, 4);
    return (
        <>
            {RenderFormSection({
                fields: veiculoFields, title: "Dados do Veículo"
            })}
        </>
    )
}