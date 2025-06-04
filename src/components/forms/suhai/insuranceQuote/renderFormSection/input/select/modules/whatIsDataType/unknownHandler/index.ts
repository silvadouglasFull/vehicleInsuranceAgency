import { Handler } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType//handler";
import type { IWhatIsDataType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType/IWhatIsDataType";
import type { TypeData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/utils/types";

export class UnknownHandler extends Handler implements IWhatIsDataType {
    handle(): TypeData | null {
        return 'transformData'
    }
}