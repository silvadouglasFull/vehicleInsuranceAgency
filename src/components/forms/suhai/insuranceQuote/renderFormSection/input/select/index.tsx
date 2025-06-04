import { customStyles } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/styles";
import type { Options, SelectBrandProps, SelectedOption } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";

/**
 * List of options
 */
const options = [
    { value: "honda", label: "Honda" },
    { value: "toyota", label: "Toyota" },
    { value: "bmw", label: "BMW" },
    { value: "mercedes", label: "Mercedes" },
    { value: "audi", label: "Audi" },
    { value: "volkswagen", label: "Volkswagen" },
    { value: "ford", label: "Ford" },
];
export const SelectBrand: React.FC<SelectBrandProps> = ({
    isClearable = true,
    isSearchable = true,
    placeholder, options: itemsOptions }: SelectBrandProps) => {
    const [options, setOptions] = useState<Options[]>([])
    useEffect(() => {

    }, [itemsOptions])
    const [selectedOption, setSelectedOption] = useState<SelectedOption>(null);
    return (
        <>
            <Form.Label>Marca do Veículo</Form.Label>
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
