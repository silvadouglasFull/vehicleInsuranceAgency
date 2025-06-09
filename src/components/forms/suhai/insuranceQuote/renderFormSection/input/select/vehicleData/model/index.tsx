/* eslint-disable @typescript-eslint/no-explicit-any */

import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { useSelectInput } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/hooks/useSelectInputVehichleData";
import { useSetOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/hooks/useSetOptions";
import { RenderSelect } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/renderInput";
import { type Options, type Select2BootStrap } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import type { Data } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe";
import React, { useEffect, useState } from "react";

export const SelectModel: React.FC<Select2BootStrap> = ({
    isClearable = true,
    isSearchable = true,
    placeholder }: Select2BootStrap) => {
    const { selectedOption, setSelectedOption } = useSelectInput()
    const { options } = useSetOptions()
    const [modelsOptions, setModelOptions] = useState<Options[]>([])
    const { state } = useInsuranceQuote()
    const { marca } = state
    useEffect(() => {
        if ((options?.length) && (marca)) {
            const possiblesValues = options.find(item => item.label === marca)
            if (possiblesValues) {
                const { value } = possiblesValues
                try {
                    const transformedValue: Data[] = JSON.parse(value)
                    setModelOptions(transformedValue.map(item => ({
                        value: item.modelo ?? '',
                        label: item.modelo ?? ''
                    })))
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }, [options, marca])
    const handleChange = (newValue: unknown) => {
        setSelectedOption(newValue as any);
    };

    return (
        <RenderSelect
            onChange={(newValue) => handleChange(newValue)}
            options={modelsOptions}
            placeholder={placeholder}
            selectedOption={selectedOption}
            isClearable={isClearable}
            isSearchable={isSearchable}
        />
    );
};
