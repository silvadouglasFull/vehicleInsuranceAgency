import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { formatCpf } from "@utils/transfomerText";
import { useEffect, useState } from "react";
import type { UseFormatDoc } from "./types";

export const useFormatDoc = (): UseFormatDoc => {
    const { state } = useInsuranceQuote()
    const { cpf } = state
    const [value, setValue] = useState<string>('')
    useEffect(() => {
        if (cpf) {
            setValue(formatCpf({ cpf }))
        }
    }, [cpf])
    return {
        value
    }
}