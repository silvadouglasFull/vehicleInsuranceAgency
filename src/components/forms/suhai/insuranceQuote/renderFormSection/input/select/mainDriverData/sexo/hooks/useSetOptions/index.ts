
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/mainDriverData/hooks/useFecthSexo";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/personalData/estadoCivil/hooks/useSetOptions/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { sexoPrincipalCondutor, sexoPrincipalCondutorLoading } = useFecthOptions()
    useEffect(() => {
        if ((sexoPrincipalCondutor?.length) && (!sexoPrincipalCondutorLoading)) {
            const transformData = sexoPrincipalCondutor
            setOptions(transformData)
        }
    }, [sexoPrincipalCondutor, sexoPrincipalCondutorLoading])
    return {
        options,
        loading: sexoPrincipalCondutorLoading
    }
}