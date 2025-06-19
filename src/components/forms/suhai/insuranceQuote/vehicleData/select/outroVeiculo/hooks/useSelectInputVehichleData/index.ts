/* eslint-disable react-hooks/exhaustive-deps */
import type { SelectedOption } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/vehicleData/context/hooks/insuranceQuote";
import type { UseSelectInput } from "@components/forms/suhai/insuranceQuote/vehicleData/select/types";
import { useEffect, useState } from "react";

export const useSelectInput = (): UseSelectInput => {
    const [selectedOption, setSelectedOption] = useState<SelectedOption>(null);
    const { handleForm } = useInsuranceQuote()
    useEffect(() => {
        if (selectedOption) {
            try {
                const { value } = selectedOption
                handleForm({
                    possuiOutroVeic: value
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