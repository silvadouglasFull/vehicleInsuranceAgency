
export type Options = {
    label: string
    value: string
    keyNameToSetValueState?: string
}
export type SelectedOption = Options | null
export type SelectBrandProps = {
    placeholder: string
    isClearable?: boolean
    isSearchable?: boolean
}