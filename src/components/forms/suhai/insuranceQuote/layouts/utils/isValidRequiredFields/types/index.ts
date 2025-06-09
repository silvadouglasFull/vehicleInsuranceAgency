import type { Name } from "@components/forms/suhai/insuranceQuote/constants/types"
import type { States } from "@components/forms/suhai/insuranceQuote/context/types"

export type IsValidRequiredFieldsProps = {
    name: Name
    state: States
}
export type IsValidRequiredFields = boolean