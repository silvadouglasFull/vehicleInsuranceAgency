import type { UseSetFirstVehicleData, UseSetFirstVehicleDataProps } from '@components/forms/suhai/insuranceQuote/renderFormSection/input/select/hooks/useSetFirstVehicleData/types';
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from 'react';
export const useSetFirstVehicleData = ({ options }: UseSetFirstVehicleDataProps): UseSetFirstVehicleData => {
    const [firstData, setFirstData] = useState<Options | null>(null)
    useEffect(() => {
        if (options.length === 1) {
            const firsItem = options[options.length - 1]
            setFirstData({ ...firsItem })
        }
    }, [options])
    return {
        firstData
    }
}