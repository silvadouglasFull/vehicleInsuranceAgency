import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { formatCep } from "@utils/transfomerText";
import { useEffect, useState } from "react";
import type { UseFormatCep } from "./types";

export const useFormatCEP = (): UseFormatCep => {
    const { state } = useInsuranceQuote()
    const { cepPernoite: cep } = state
    const [value, setValue] = useState<string>('')
    useEffect(() => {
        if (cep) {
            setValue(formatCep({ cep }))
        }
    }, [cep])
    return {
        value
    }
}