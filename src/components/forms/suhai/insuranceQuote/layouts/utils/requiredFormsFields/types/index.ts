import type { FormField, Label, Name } from "@components/forms/suhai/insuranceQuote/constants/types"

export type RequiredFormsFields = {
    name: Name
    label: Label
}
export type RequiredFormsFieldsProps = {
    formFiels: FormField[]
}