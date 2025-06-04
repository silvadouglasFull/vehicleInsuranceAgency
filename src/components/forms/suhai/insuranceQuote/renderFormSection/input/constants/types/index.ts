import type { Type } from "@components/forms/suhai/insuranceQuote/constants/types";
import type { SelectBrandProps } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import type React from "react";
export type InputsType = {
    type: Type;
    component: (props?: SelectBrandProps) => React.JSX.Element
}