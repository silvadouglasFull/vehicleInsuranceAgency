import type { ActionMeta, GroupBase, OptionsOrGroups } from "react-select"

export type Options = {
    label: string
    value: string
    keyNameToSetValueState?: string
}
export type SelectedOption = Options | null
export type Select2BootStrap = {
    placeholder: string
    isClearable?: boolean
    isSearchable?: boolean
}
export type RenderSelectProps = Select2BootStrap & {
    selectedOption: unknown
    onChange: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void
    options: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined
}