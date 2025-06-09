import type { FormProps } from "@components/forms/suhai/insuranceQuote/constants/types";
import { inputTypes } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/constants";
import { FormControll } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControll";
import type { Select2BootStrap } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import type { RenderInputType as TRenderInputType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/types";
import type React from "react";

export const RenderInputType: React.FC<TRenderInputType> = ({ type, props }: TRenderInputType) => {

    if (!type) {
        return <FormControll {...props as FormProps} />
    }
    const findTypeInput = inputTypes.find(item => item.type === type)
    if (!findTypeInput) {
        return <FormControll {...props as FormProps} />
    }
    return findTypeInput.component(props as Select2BootStrap)
}