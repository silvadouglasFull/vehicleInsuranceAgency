/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSelectInput } from "@components/forms/suhai/insuranceQuote/garageData/select/pergunta2/hooks/useSelectInput";
import { useSetOptions } from "@components/forms/suhai/insuranceQuote/garageData/select/pergunta2/hooks/useSetOptions";
import { RenderSelect } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/renderInput";
import type { Select2BootStrap } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import React from "react";

export const SelectPergunta2: React.FC<Select2BootStrap> = ({
    isClearable = true,
    isSearchable = true,
    placeholder }: Select2BootStrap) => {
    const { selectedOption, setSelectedOption } = useSelectInput()
    const { options } = useSetOptions()
    const handleChange = (newValue: unknown) => {
        setSelectedOption(newValue as any);
    };

    return (
        <RenderSelect
            onChange={(newValue) => handleChange(newValue)}
            options={options}
            placeholder={placeholder}
            selectedOption={selectedOption}
            isClearable={isClearable}
            isSearchable={isSearchable}
        />
    );
};
