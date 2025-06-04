import { transformOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions";
import { customStyles } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/styles";
import type { Options, SelectBrandProps, SelectedOption } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import React, { useEffect, useState } from "react";
import Select from "react-select";

export const SelectBrand: React.FC<SelectBrandProps> = ({
    isClearable = true,
    isSearchable = true,
    placeholder, options: itemsOptions }: SelectBrandProps) => {
    const [options, setOptions] = useState<Options[]>([])
    useEffect(() => {
        console.log('itemsOptions=>', itemsOptions)
        if (itemsOptions?.length) {
            setOptions(transformOptions.transform(itemsOptions))
        }
    }, [itemsOptions])
    const [selectedOption, setSelectedOption] = useState<SelectedOption>(null);
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
            />
        </>
    );
};
