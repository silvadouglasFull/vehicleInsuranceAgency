
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/vehicleData/tipoUtilizacao/hooks/useSetOptions/types";
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useFecthTipoUtilizacao";
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