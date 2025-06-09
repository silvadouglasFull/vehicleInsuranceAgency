import type { Label } from "@components/forms/suhai/insuranceQuote/constants/types";
import type { States } from "@components/forms/suhai/insuranceQuote/context/types";
import type { RequiredFormsFields } from "@components/forms/suhai/insuranceQuote/layouts/utils/requiredFormsFields/types";

export type GenerateMessageIncorrectFillingProps = {
    label: Label
}
export type GenerateMessageIncorrectFilling = string
export type GenerateListMessageIncorrectFillingProps = {
    requiredFields: RequiredFormsFields[]
    formData: States
}
export type GenerateListMessageIncorrectFilling = string[]