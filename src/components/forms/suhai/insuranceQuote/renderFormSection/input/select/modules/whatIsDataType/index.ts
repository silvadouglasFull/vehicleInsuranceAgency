import { container } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType/container";
import type { TWhatIsDataType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType/types";
import type { TypeData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/utils/types";

export const whatIsDataType: TWhatIsDataType = {
    typeDate: (data: []): TypeData => container().whatIsDataType.handle(data)
}