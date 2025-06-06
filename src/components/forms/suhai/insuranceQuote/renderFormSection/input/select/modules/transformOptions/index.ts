import { container } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions/container";

export const transformOptions = {
    transform: (data: Record<string, []>) => (container({ data }).transformOptions)
}