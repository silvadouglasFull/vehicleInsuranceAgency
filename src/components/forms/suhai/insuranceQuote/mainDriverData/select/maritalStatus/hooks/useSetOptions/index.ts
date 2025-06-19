
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/mainDriverData/hooks/useFecthEstadoCivil";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/mainDriverData/select/maritalStatus/hooks/useSetOptions/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { estadoCivilPrincipalCondutor, estadoCivilPrincipalCondutorLoading } = useFecthOptions()
    useEffect(() => {
        if ((estadoCivilPrincipalCondutor?.length) && (!estadoCivilPrincipalCondutorLoading)) {
            const transformData = estadoCivilPrincipalCondutor
            setOptions(transformData)
        }
    }, [estadoCivilPrincipalCondutor, estadoCivilPrincipalCondutorLoading])
    return {
        options,
        loading: estadoCivilPrincipalCondutorLoading
    }
}