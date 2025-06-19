/* eslint-disable react-hooks/exhaustive-deps */
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/personalData/context/hooks/insuranceQuote";
import type { UseSelectInput } from "@components/forms/suhai/insuranceQuote/personalData/select/sexo/hooks/useSelectInput/types";
import type { SelectedOption } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";

export const useSelectInput = (): UseSelectInput => {
    const [selectedOption, setSelectedOption] = useState<SelectedOption>(null);
    const { handleForm } = useInsuranceQuote()
    useEffect(() => {
        if (selectedOption) {
            try {
                const { value } = selectedOption
                handleForm({
                    sexo: value
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