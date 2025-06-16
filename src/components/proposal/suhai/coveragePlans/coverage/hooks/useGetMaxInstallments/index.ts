import type { UseGetMaxInstallments } from "@components/proposal/suhai/coveragePlans/coverage/hooks/useGetMaxInstallments/types";
import { getMaxPlotOfCoverage } from "@components/proposal/suhai/coveragePlans/coverage/utils";
import type { Parcela } from "@components/proposal/suhai/coveragePlans/types";
import { useEffect, useState } from "react";
export const useGetMaxInstallments = (installMents: Parcela[]): UseGetMaxInstallments => {
    const [plot, setPlot] = useState<Parcela | null>(null)
    useEffect(() => {
        const getMax = () => {
            if (installMents.length) {
                setPlot(getMaxPlotOfCoverage(installMents))
            }
        }
        getMax()
    }, [installMents])
    return {
        plot
    }

}