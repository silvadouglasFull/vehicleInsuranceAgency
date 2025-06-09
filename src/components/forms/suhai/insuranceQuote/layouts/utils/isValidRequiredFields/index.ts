import type { IsValidRequiredFieldsProps } from "@components/forms/suhai/insuranceQuote/layouts/utils/isValidRequiredFields/types";

export const isValid = ({ name, state }: IsValidRequiredFieldsProps) => {
    return (state[name] ? true : false)
}