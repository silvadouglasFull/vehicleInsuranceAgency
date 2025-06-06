import { RenderFormSection } from "@components/forms/suhai/insuranceQuote/renderFormSection";
import { listForms } from "@components/forms/suhai/insuranceQuote/utils/listForms";
import type React from "react";
import { mainDriverData } from "../constants";

export const FormMainDriveData: React.FC = () => {
    const Fields = listForms({ additionalForms: mainDriverData });
    return RenderFormSection({
        fields: Fields, title: "Dados do Principal Condutor"
    })
}