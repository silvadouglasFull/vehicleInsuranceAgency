import type { SelectBrandProps } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { SelectBrand } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/vehicleData/brand";
import type { Forms } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/vehicleData/constants/types";

export const Inputs: Forms[] = [{
    key: 'marca',
    component: (props?: SelectBrandProps) => (innerProps) => <SelectBrand {...(props ?? innerProps)} />
}]