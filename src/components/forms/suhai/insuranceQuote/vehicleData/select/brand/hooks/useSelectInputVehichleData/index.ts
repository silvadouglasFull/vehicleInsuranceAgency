/* eslint-disable react-hooks/exhaustive-deps */
import type { SelectedOption } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/vehicleData/context/hooks/insuranceQuote";
import type { States } from "@components/forms/suhai/insuranceQuote/vehicleData/context/types";
import { transforValue } from "@components/forms/suhai/insuranceQuote/vehicleData/select/brand/hooks/useSelectInputVehichleData/utils/transformParseValue";
import type { UseSelectInput } from "@components/forms/suhai/insuranceQuote/vehicleData/select/types";
import { useEffect, useState } from "react";

export const useSelectInput = (): UseSelectInput => {
    const [selectedOption, setSelectedOption] = useState<SelectedOption>(null);
    const { handleForm } = useInsuranceQuote()
    useEffect(() => {
        if (selectedOption) {
            console.log(selectedOption)
            try {
                const { value } = selectedOption
                const parseValue = transforValue.tranform(value)
                const { cod_fipe } = parseValue[0]
                handleForm({
                    ...parseValue[0] as States,
                    codigoFipe: cod_fipe
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