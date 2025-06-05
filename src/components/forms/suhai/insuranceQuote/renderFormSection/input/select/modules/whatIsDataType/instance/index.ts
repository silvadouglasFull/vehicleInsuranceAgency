import { Handler } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType//handler";
import type { IWhatIsDataType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType/IWhatIsDataType";
import type { TypeData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/utils/types";

export class WhatIsDataType extends Handler implements IWhatIsDataType {
    handle(data: Record<string, []>): TypeData {
        const result = super.handle(data);
        return result !== null ? result : 'transformData';
    }
}