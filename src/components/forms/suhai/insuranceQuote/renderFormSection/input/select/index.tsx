
import { useSelectInput } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/hooks/useSelectInput";
import { customStyles } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/styles";
import type { SelectBrandProps } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import React from "react";
import Select from "react-select";
export const SelectBrand: React.FC<SelectBrandProps> = ({
    isClearable = true,
    isSearchable = true,
    placeholder }: SelectBrandProps) => {
    const { options, selectedOption, setSelectedOption } = useSelectInput()
    return (
        <>
            <Select
                styles={customStyles}
                value={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder={placeholder}
                isClearable={isClearable}
                isSearchable={isSearchable}
                noOptionsMessage={() => <span>Nenhum resultado encontrado</span>}
            />
        </>
    );
};
