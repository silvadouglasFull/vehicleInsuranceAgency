
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/personalData/hooks/useFecthEstadoCivil";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/personalData/estadoCivil/hooks/useSetOptions/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { estadoCivil, estadoCivilLoading } = useFecthOptions()
    useEffect(() => {
        if ((estadoCivil?.length) && (!estadoCivilLoading)) {
            const transformData = estadoCivil
            setOptions(transformData)
        }
    }, [estadoCivil, estadoCivilLoading])
    return {
        options,
        loading: estadoCivilLoading
    }
}