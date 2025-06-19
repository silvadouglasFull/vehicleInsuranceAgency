
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useFecthOutroVeiculo";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/vehicleData/select/outroVeiculo/hooks/useSetOptions/types";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { possuiOutroVeic, possuiOutroVeicLoading } = useFecthOptions()
    useEffect(() => {
        if ((possuiOutroVeic?.length) && (!possuiOutroVeicLoading)) {
            const transformData = possuiOutroVeic
            setOptions(transformData)
        }
    }, [possuiOutroVeic, possuiOutroVeicLoading])
    return {
        options,
        loading: possuiOutroVeicLoading
    }
}