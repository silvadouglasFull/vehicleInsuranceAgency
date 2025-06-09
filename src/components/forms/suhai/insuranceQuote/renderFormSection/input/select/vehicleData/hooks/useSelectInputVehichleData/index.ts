/* eslint-disable react-hooks/exhaustive-deps */
import type { States } from "@components/forms/suhai/insuranceQuote/context/types";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import type { SelectedOption } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import type { UseSelectInput } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/vehicleData/hooks/useSelectInputVehichleData/types";
import { transforValue } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/vehicleData/hooks/useSelectInputVehichleData/utils/transformParseValue";
import { useEffect, useState } from "react";

export const useSelectInput = (): UseSelectInput => {
    const [selectedOption, setSelectedOption] = useState<SelectedOption>(null);
    const { handleForm } = useInsuranceQuote()
    useEffect(() => {
        if (selectedOption) {
            try {
                const { value } = selectedOption
                const parseValue = transforValue.tranform(value)
                handleForm({
                    ...parseValue[0] as States
                })
            } catch (error) {
                console.log(error)
            }
        }
    }, [selectedOption])
    return {
        selectedOption,
        setSelectedOption
    }
}