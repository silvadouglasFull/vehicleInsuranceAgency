/* eslint-disable react-hooks/exhaustive-deps */
import { useInsuranceQuote as useInsuranceQuoteInsuredData } from "@components/forms/suhai/insuranceQuote/insuredData/context/hooks/insuranceQuote";
import type { UseCopyForm } from "@components/forms/suhai/insuranceQuote/insuredData/swith/hooks/useCopyForm/types";
import { useInsuranceQuote as useInsuranceQuotePersonalData } from "@components/forms/suhai/insuranceQuote/personalData/context/hooks/insuranceQuote";
import { useEffect, useState } from "react";

export const useCopyForm = (): UseCopyForm => {
    const { handleForm } = useInsuranceQuoteInsuredData()
    const { state } = useInsuranceQuotePersonalData()
    const {
        cpf,
        cepPernoite,
        endereco,
        sexo
    } = state
    const [value, setValue] = useState<boolean>(false)
    useEffect(() => {
        const handleCopyForm = () => {
            if (value) {
                handleForm({
                    cepPernoite,
                    cpf,
                    endereco,
                    sexo
                })
            } else {
                handleForm({
                    cepPernoite: '',
                    cpf: '',
                    endereco: '',
                    sexo: ''
                })
            }
        }
        handleCopyForm()
    }, [value])
    const onChange = () => {
        setValue(!value)
    }
    return {
        value,
        onChange
    }
}
