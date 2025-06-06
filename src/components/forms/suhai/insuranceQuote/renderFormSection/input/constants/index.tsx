import type { FormProps } from "@components/forms/suhai/insuranceQuote/constants/types";
import type { InputsType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/constants/types";
import { FormControllBrand } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllBrand";
import { FormControllDoc } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllDoc";
import type { SelectBrandProps } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { SelectBrand } from "../select/vehicleData/brand";
import { SelectModel } from "../select/vehicleData/model";
export const inputTypes: InputsType[] = [
    {
        type: 'marca',
        component: (props?: SelectBrandProps | FormProps) => <SelectBrand {...props as SelectBrandProps} />
    },
    {
        type: 'modelo',
        component: (props?: SelectBrandProps | FormProps) => <SelectModel {...props as SelectBrandProps} />
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