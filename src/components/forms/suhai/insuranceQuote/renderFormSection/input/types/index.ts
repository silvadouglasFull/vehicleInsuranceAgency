import type { FormField, FormProps, Type } from "@components/forms/suhai/insuranceQuote/constants/types";
import type { Select2BootStrap } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
export type PropsToSelect = FormProps & Select2BootStrap & FormField
export type RenderInputType = {
    type: Type,
    props: PropsToSelect | FormProps
}
