
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/garageData/hooks/useFecthPerguntaGaragem1";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/garageData/pergunta1/hooks/useSetOptions/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { garagemPergunta1, garagemPergunta1Loading } = useFecthOptions()
    useEffect(() => {
        if ((garagemPergunta1?.length) && (!garagemPergunta1Loading)) {
            const transformData = garagemPergunta1
            setOptions(transformData)
        }
    }, [garagemPergunta1, garagemPergunta1Loading])
    return {
        options,
        loading: garagemPergunta1Loading
    }
}