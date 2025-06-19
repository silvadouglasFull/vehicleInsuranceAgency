/* eslint-disable @typescript-eslint/no-explicit-any */

import { RenderSelect } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/renderInput";
import type { Select2BootStrap } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useSelectInput } from "@components/forms/suhai/insuranceQuote/vehicleData/select/outroVeiculo/hooks/useSelectInputVehichleData";
import { useSetOptions } from "@components/forms/suhai/insuranceQuote/vehicleData/select/outroVeiculo/hooks/useSetOptions";
import React from "react";

export const SelectOutroVeiculo: React.FC<Select2BootStrap> = ({
    isClearable = true,
    isSearchable = true,
    placeholder }: Select2BootStrap) => {
    const { selectedOption, setSelectedOption } = useSelectInput()
    const { options, loading } = useSetOptions()
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
            isLoading={loading}
        />
    );
};
