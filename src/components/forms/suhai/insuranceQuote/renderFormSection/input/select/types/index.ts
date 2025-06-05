import type { Label } from "@components/forms/suhai/insuranceQuote/constants/types";

export type Options = { label: string; value: string }
export type SelectedOption = Options | null
export type SelectBrandProps = {
    placeholder: string
    isClearable?: boolean
    isSearchable?: boolean
    label: Label
}