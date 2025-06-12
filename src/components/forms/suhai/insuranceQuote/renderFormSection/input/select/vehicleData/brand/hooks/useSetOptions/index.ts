
import { transformOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import type { UseSetOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/vehicleData/brand/hooks/useSetOptions/types";
import { useVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useVehicleData";
import { useEffect, useState } from "react";
export const useSetOptions = (): UseSetOptions => {
    const [options, setOptions] = useState<Options[]>([])
    const { items, loading } = useVehicleData()
    useEffect(() => {
        if ((items) && (!loading)) {
            const transformData = transformOptions.transform(items as Record<string, []>)
            setOptions(transformData)
        }
    }, [items, loading])
    return {
        options,
        loading
    }
}