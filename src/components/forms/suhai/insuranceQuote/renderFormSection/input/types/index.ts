import type { FormField, FormProps, Type } from "@components/forms/suhai/insuranceQuote/constants/types";
import type { SelectBrandProps } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
export type PropsToSelect = FormProps & SelectBrandProps & FormField
export type RenderInputType = {
    type: Type,
    props: PropsToSelect | FormProps
}
