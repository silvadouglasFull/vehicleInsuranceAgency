
import type { Options, SelectedOption } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
export type UseSelectInput = {
    options: Options[];
    selectedOption: SelectedOption;
    setSelectedOption: React.Dispatch<React.SetStateAction<SelectedOption>>;
}