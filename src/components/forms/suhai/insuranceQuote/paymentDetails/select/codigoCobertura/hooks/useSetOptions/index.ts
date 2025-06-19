
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/paymentDetails/hooks/useFecthCodigoCobertura";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/paymentDetails/select/codigoCobertura/hooks/useSetOptions/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { codigoCobertura, codigoCoberturaLoading } = useFecthOptions()
    useEffect(() => {
        if ((codigoCobertura?.length) && (!codigoCoberturaLoading)) {
            const transformData = codigoCobertura
            setOptions(transformData)
        }
    }, [codigoCobertura, codigoCoberturaLoading])
    return {
        options,
        loading: codigoCoberturaLoading
    }
}