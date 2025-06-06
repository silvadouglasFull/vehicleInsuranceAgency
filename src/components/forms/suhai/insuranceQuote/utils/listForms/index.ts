import { formLabels } from "@components/forms/suhai/insuranceQuote/constants";
import type { FormField } from "@components/forms/suhai/insuranceQuote/constants/types";
import type { FormListProps } from "./type";
export const listForms = ({ sliceEnd, sliceStart = 0, additionalForms }: FormListProps): FormField[] => {
    const personalFields: FormField[] = formLabels.filter(item => additionalForms.includes(item.id))
    if (!sliceStart && !sliceEnd) {
        return personalFields
    }
    const veiculoFields: FormField[] = formLabels.slice(sliceStart, sliceEnd ?? formLabels.length);
    return [...veiculoFields, ...personalFields]
}