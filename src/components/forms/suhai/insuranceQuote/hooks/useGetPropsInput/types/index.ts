import type { FormField, Type } from "@components/forms/suhai/insuranceQuote/constants/types"
import type { FormListProps } from "@components/forms/suhai/insuranceQuote/utils/listForms/type"

export type UseGetPropsInputParams = {
    types: Type[]
} & FormListProps
export type Props = { [key: string]: FormField }
export type UseGetPropsInput = {
    [key: string]: FormField;
}