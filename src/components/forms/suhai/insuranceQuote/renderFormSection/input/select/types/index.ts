import type { ActionMeta, GroupBase, OptionsOrGroups } from "react-select"

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
export type RenderSelectProps = SelectBrandProps & {
    selectedOption: unknown
    onChange: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void
    options: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined
}