import { container } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions/container";

export const transformOptions = {
    transform: (data: []) => (container({ data }).transformOptions)
}