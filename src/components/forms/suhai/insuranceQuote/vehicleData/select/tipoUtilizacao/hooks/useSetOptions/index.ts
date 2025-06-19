
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useFecthTipoUtilizacao";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/vehicleData/select/tipoUtilizacao/hooks/useSetOptions/types";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { tipoUtilizacao, tipoUtilizacaoLoading } = useFecthOptions()
    useEffect(() => {
        if ((tipoUtilizacao?.length) && (!tipoUtilizacaoLoading)) {
            const transformData = tipoUtilizacao
            setOptions(transformData)
        }
    }, [tipoUtilizacao, tipoUtilizacaoLoading])
    return {
        options,
        loading: tipoUtilizacaoLoading
    }
}