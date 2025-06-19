
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/paymentDetails/hooks/useFecthTipoContratacao";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/paymentDetails/select/tipoContratacao/hooks/useSetOptions/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { tipoContratacao, tipoContratacaoLoading } = useFecthOptions()
    useEffect(() => {
        if ((tipoContratacao?.length) && (!tipoContratacaoLoading)) {
            const transformData = tipoContratacao
            setOptions(transformData)
        }
    }, [tipoContratacao, tipoContratacaoLoading])
    return {
        options,
        loading: tipoContratacaoLoading
    }
}