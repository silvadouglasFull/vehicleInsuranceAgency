import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { maskCodFipe } from "@utils/transfomerText";
import { useEffect, useState } from "react";
import type { UseFormatCodFipe } from "./types";

export const useFormatCodFipe = (): UseFormatCodFipe => {
    const { state } = useInsuranceQuote()
    const { codigoFipe } = state
    const [value, setValue] = useState<string>('')
    useEffect(() => {
        if (codigoFipe) {
            setValue(maskCodFipe({ codFipe: codigoFipe }))
        }
    }, [codigoFipe])
    return {
        value
    }
}