
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/garageData/hooks/useFecthPerguntaGaragem4";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/garageData/pergunta3/hooks/useSetOptions/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { garagemPergunta4, garagemPergunta4Loading } = useFecthOptions()
    useEffect(() => {
        if ((garagemPergunta4?.length) && (!garagemPergunta4Loading)) {
            const transformData = garagemPergunta4
            setOptions(transformData)
        }
    }, [garagemPergunta4, garagemPergunta4Loading])
    return {
        options,
        loading: garagemPergunta4Loading
    }
}