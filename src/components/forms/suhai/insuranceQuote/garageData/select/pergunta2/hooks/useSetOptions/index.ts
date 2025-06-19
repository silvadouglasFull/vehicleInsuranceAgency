
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/garageData/hooks/useFecthPerguntaGaragem2";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/garageData/pergunta1/hooks/useSetOptions/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { garagemPergunta2, garagemPergunta2Loading } = useFecthOptions()
    useEffect(() => {
        if ((garagemPergunta2?.length) && (!garagemPergunta2Loading)) {
            const transformData = garagemPergunta2
            setOptions(transformData)
        }
    }, [garagemPergunta2, garagemPergunta2Loading])
    return {
        options,
        loading: garagemPergunta2Loading
    }
}