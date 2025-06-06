/* eslint-disable react-hooks/exhaustive-deps */
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { useSelectInput } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/hooks/useSelectInputVehichleData";
import { useSetFirstVehicleData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/hooks/useSetFirstVehicleData";
import { useSetOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/hooks/useSetOptions";
import { customStyles } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/styles";
import type { SelectBrandProps } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import React, { useEffect } from "react";
import Select from "react-select";

export const SelectBrand: React.FC<SelectBrandProps> = ({
    isClearable = true,
    isSearchable = true,
    placeholder }: SelectBrandProps) => {
    const { selectedOption, setSelectedOption } = useSelectInput()
    const { options } = useSetOptions()
    const { handleForm } = useInsuranceQuote()
    const { firstData } = useSetFirstVehicleData({ options: options })
    useEffect(() => {
        if (firstData?.label) {
            const { label, value } = firstData
            setSelectedOption({
                label,
                value
            })
            handleForm({
                marca: label
            })
        }
    }, [firstData])
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
