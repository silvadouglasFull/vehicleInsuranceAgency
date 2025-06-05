import { container } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType/container";
import type { TWhatIsDataType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType/types";
import type { TypeData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/utils/types";

export const whatIsDataType: TWhatIsDataType = {
    typeDate: (data: Record<string, []>): TypeData => {
        const result = container().whatIsDataType.handle(data);
        if (result === null) {
            throw new Error("handle returned null, expected keyof Strategies");
        }
        return result;
    }
}