
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useFecthOptions } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useFetchZeroKm";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/vehicleData/select/zeroKm/hooks/useSetOptions/types";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { zeroKm, zeroKmLoading } = useFecthOptions()
    useEffect(() => {
        if ((zeroKm?.length) && (!zeroKmLoading)) {
            const transformData = zeroKm
            setOptions(transformData)
        }
    }, [zeroKm, zeroKmLoading])
    return {
        options,
        loading: zeroKmLoading
    }
}