import type { FormField } from "@components/forms/suhai/insuranceQuote/constants/types";
import type { Type } from "@flavor/links/types";
import type { Select2BootStrap } from "../input/select/types";

export type TRenderFormSection = {
    title: string
    fields: FormField[]
}
export type InputTypes = {
    type: Type
    component: (props: Select2BootStrap) => 
}