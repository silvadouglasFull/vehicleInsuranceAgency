import type { InputsType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/constants/types";
import { SelectBrand } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select";
import type { SelectBrandProps } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
export const inputTypes: InputsType[] = [
    {
        type: 'select',
        component: (props?: SelectBrandProps) => <SelectBrand {...props as SelectBrandProps} />
    }
]