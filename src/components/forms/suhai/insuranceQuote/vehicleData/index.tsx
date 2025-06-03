import { formLabels } from "@components/forms/suhai/insuranceQuote/constants";
import { RenderFormSection } from "@components/forms/suhai/insuranceQuote/renderFormSection";
import { Spinner } from "@components/spinner";
import type React from "react";
import { useSetVehicleData } from "./hooks/useSetVehicleData";

export const FormVehicleData: React.FC = () => {
    const veiculoFields = formLabels.slice(0, 4);
    const { loading } = useSetVehicleData()
    return (
        <>
            {loading && <Spinner />}
            {RenderFormSection({
                fields: veiculoFields, title: "Dados do Veículo"
            })}
        </>
    )
}