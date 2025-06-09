import type { RequiredFormsFields, RequiredFormsFieldsProps } from "@components/forms/suhai/insuranceQuote/layouts/utils/requiredFormsFields/types";

export const requiredFormsFields = ({ formFiels }: RequiredFormsFieldsProps): RequiredFormsFields[] => {
    return formFiels.filter(item => item.required).map(item => ({
        label: item.label,
        name: item.name
    }))
}