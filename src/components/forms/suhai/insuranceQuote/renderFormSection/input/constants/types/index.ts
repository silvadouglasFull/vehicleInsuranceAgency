import type { FormProps, Type } from "@components/forms/suhai/insuranceQuote/constants/types";
import type { Select2BootStrap } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import type React from "react";
export type InputsType = {
    type: Type;
    component: (props?: Select2BootStrap | FormProps) => React.JSX.Element
}