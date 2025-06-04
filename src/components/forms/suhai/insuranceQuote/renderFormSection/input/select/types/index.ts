import type { Data } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe";

export type Options = { label: string; value: string }
export type SelectedOption = Options | null
export type SelectBrandProps = {
    placeholder: string
    isClearable?: boolean
    isSearchable?: boolean
    options: Data[] | []
}