/* eslint-disable react-hooks/exhaustive-deps */
import { useInsuranceQuote as useInsuranceQuoteInsuredData } from "@components/forms/suhai/insuranceQuote/mainDriverData/context/hooks/insuranceQuote";
import type { UseCopyForm } from "@components/forms/suhai/insuranceQuote/mainDriverData/swith/hooks/useCopyForm/types";
import { useInsuranceQuote as useInsuranceQuotePersonalData } from "@components/forms/suhai/insuranceQuote/personalData/context/hooks/insuranceQuote";
import { useEffect, useState } from "react";

export const useCopyForm = (): UseCopyForm => {
    const { handleForm } = useInsuranceQuoteInsuredData()
    const { state } = useInsuranceQuotePersonalData()
    const {
        dtNascimento,
        sexo,
        estadoCivil
    } = state
    const [value, setValue] = useState<boolean>(false)
    useEffect(() => {
        const handleCopyForm = () => {
            if (value) {
                handleForm({
                    dtNascimentoPrincipalCondutor: dtNascimento,
                    estadoCivilPrincipalCondutor: estadoCivil,
                    sexoPrincipalCondutor: sexo
                })
            } else {
                handleForm({
                    dtNascimentoPrincipalCondutor: '',
                    estadoCivilPrincipalCondutor: '',
                    sexoPrincipalCondutor: '',
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
