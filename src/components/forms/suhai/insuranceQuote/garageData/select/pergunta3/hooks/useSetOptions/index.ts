
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/garageData/hooks/useFecthPerguntaGaragem3";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/garageData/pergunta3/hooks/useSetOptions/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { garagemPergunta3, garagemPergunta3Loading } = useFecthOptions()
    useEffect(() => {
        if ((garagemPergunta3?.length) && (!garagemPergunta3Loading)) {
            const transformData = garagemPergunta3
            setOptions(transformData)
        }
    }, [garagemPergunta3, garagemPergunta3Loading])
    return {
        options,
        loading: garagemPergunta3Loading
    }
}