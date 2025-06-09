import type { FormProps } from "@components/forms/suhai/insuranceQuote/constants/types";
import type { InputsType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/constants/types";
import { FormControllBrand } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllBrand";
import { FormControllDoc } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllDoc";
import type { Select2BootStrap } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { SelectBrand } from "../select/vehicleData/brand";
import { SelectModel } from "../select/vehicleData/model";
export const inputTypes: InputsType[] = [
    {
        type: 'marca',
        component: (props?: Select2BootStrap | FormProps) => <SelectBrand {...props as Select2BootStrap} />
    },
    {
        type: 'modelo',
        component: (props?: Select2BootStrap | FormProps) => <SelectModel {...props as Select2BootStrap} />
    },
    {
        type: 'fipe',
        component: (props?: Select2BootStrap | FormProps) => <FormControllBrand {...props as FormProps} />
    },
    {
        type: 'cpf',
        component: (props?: Select2BootStrap | FormProps) => <FormControllDoc {...props as FormProps} />
    }
]