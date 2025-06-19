import type { FormField } from "@components/forms/suhai/insuranceQuote/constants/types"
import type { FormListProps } from "@components/forms/suhai/insuranceQuote/utils/listForms/type"

export type UseGetPropsInputParams = {
    keyGet?: 'name'
} & FormListProps
export type Props = { [key: string]: FormField }
export type UseGetPropsInput = {
    [key: string]: FormField;
}