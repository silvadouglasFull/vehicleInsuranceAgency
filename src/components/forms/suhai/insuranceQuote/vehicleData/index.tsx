import { RenderFormSection } from "@components/forms/suhai/insuranceQuote/renderFormSection";
import { listForms } from "@components/forms/suhai/insuranceQuote/utils/listForms";
import type React from "react";
import { vehicleData } from "../constants";

export const FormVehicleData: React.FC = () => {
    const veiculoFields = listForms({ sliceStart: 0, sliceEnd: 4, additionalForms: vehicleData })
    return (
        <>
            {RenderFormSection({
                fields: veiculoFields, title: "Dados do Veículo"
            })}
        </>
    )
}