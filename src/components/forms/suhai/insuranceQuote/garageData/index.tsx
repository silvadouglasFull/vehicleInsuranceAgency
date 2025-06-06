import { RenderFormSection } from "@components/forms/suhai/insuranceQuote/renderFormSection";
import { listForms } from "@components/forms/suhai/insuranceQuote/utils/listForms";
import type React from "react";
import { garageData } from "../constants";

export const FormGarageData: React.FC = () => {
    const pessoalFields = listForms({ additionalForms: garageData });
    return RenderFormSection({
        fields: pessoalFields, title: "Informações sobre Sua Garagem"
    })
}