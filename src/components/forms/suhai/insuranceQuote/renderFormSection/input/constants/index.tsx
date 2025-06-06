import type { FormProps } from "@components/forms/suhai/insuranceQuote/constants/types";
import type { InputsType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/constants/types";
import { FormControllBrand } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllBrand";
import { FormControllDoc } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllDoc";
import { SelectBrand } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select";
import type { SelectBrandProps } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
export const inputTypes: InputsType[] = [
    {
        type: 'select',
        component: (props?: SelectBrandProps | FormProps) => <SelectBrand {...props as SelectBrandProps} />
    },
    {
        type: 'fipe',
        component: (props?: SelectBrandProps | FormProps) => <FormControllBrand {...props as FormProps} />
    },
    {
        type: 'cpf',
        component: (props?: SelectBrandProps | FormProps) => <FormControllDoc {...props as FormProps} />
    }
]