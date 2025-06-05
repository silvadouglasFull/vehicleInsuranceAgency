import type { TypeData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/utils/types";

export interface IWhatIsDataType {
    handle(data?: Record<string, []>): TypeData | null
}