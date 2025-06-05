/* eslint-disable react-hooks/exhaustive-deps */
import type { States } from "@components/forms/suhai/insuranceQuote/context/types";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import type { UseSelectInput } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/hooks/useSelectInput/types";
import { transformOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions";
import type { Options, SelectedOption } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useVehicleData";
import { useEffect, useState } from "react";
export const useSelectInput = (): UseSelectInput => {
    const [options, setOptions] = useState<Options[]>([])
    const [selectedOption, setSelectedOption] = useState<SelectedOption>(null);

    const { items, loading } = useVehicleData()
    const { handleForm } = useInsuranceQuote()
    useEffect(() => {
        if (selectedOption) {
            const { value } = selectedOption
            const parseValue = JSON.parse(value)
            handleForm({
                ...parseValue as States
            })
        }
    }, [selectedOption])
    useEffect(() => {
        if ((items?.length) && (!loading)) {
            setOptions(transformOptions.transform(items as []))
        }
    }, [items, loading])
    return {
        options,
        selectedOption,
        setSelectedOption
    }
}