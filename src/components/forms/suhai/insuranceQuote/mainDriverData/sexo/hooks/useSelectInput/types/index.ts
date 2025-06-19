
import type { SelectedOption } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
export type UseSelectInput = {
    selectedOption: SelectedOption;
    setSelectedOption: React.Dispatch<React.SetStateAction<SelectedOption>>;
}