
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/paymentDetails/hooks/useFecthFormaPagamento";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/paymentDetails/formaPagamento/hooks/useSetOptions/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { formaPagamento, formaPagamentoLoading } = useFecthOptions()
    useEffect(() => {
        if ((formaPagamento?.length) && (!formaPagamentoLoading)) {
            const transformData = formaPagamento
            setOptions(transformData)
        }
    }, [formaPagamento, formaPagamentoLoading])
    return {
        options,
        loading: formaPagamentoLoading
    }
}