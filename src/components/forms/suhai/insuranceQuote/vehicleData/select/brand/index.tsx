/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { RenderSelect } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/renderInput";
import type { Select2BootStrap } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useSelectInput } from "@components/forms/suhai/insuranceQuote/vehicleData/select/brand/hooks/useSelectInputVehichleData";
import { useSetFirstVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData/select/brand/hooks/useSetFirstVehicleData";
import { useSetOptions } from "@components/forms/suhai/insuranceQuote/vehicleData/select/brand/hooks/useSetOptions";
import React, { useEffect } from "react";

export const SelectBrand: React.FC<Select2BootStrap> = ({
    isClearable = true,
    isSearchable = true,
    placeholder }: Select2BootStrap) => {
    const { selectedOption, setSelectedOption } = useSelectInput()
    const { options, loading } = useSetOptions()
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
