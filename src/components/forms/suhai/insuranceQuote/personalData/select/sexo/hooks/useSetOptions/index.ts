
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/personalData/hooks/useFecthSexo";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/personalData/estadoCivil/hooks/useSetOptions/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { sexo, sexoLoading } = useFecthOptions()
    useEffect(() => {
        if ((sexo?.length) && (!sexoLoading)) {
            const transformData = sexo
            setOptions(transformData)
        }
    }, [sexo, sexoLoading])
    return {
        options,
        loading: sexoLoading
    }
}