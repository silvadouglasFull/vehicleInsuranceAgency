/* eslint-disable react-hooks/exhaustive-deps */
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { formatPhoneNumber } from "@utils/form/mask/phone";
import { getDDDFromPhone } from "@utils/getDDDFromPhone";
import { useEffect, useState } from "react";
import type { UseFormatPhone } from "./types";

export const useFormatPhone = (): UseFormatPhone => {
    const { state, handleForm } = useInsuranceQuote()
    const { telefone } = state
    const [value, setValue] = useState<string>('')
    useEffect(() => {
        if (telefone) {
            const stringFormated = formatPhoneNumber(telefone, 'pt')
            setValue(stringFormated)
            handleForm({
                ddd_cel: getDDDFromPhone(stringFormated) ?? ''
            })
        }
    }, [telefone])
    return {
        value
    }
}