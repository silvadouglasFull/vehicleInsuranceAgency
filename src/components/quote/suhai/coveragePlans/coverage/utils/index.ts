import type { Parcela } from "@components/quote/suhai/coveragePlans/types";

export type GetMaxPlotOfCoverage = Parcela
export const getMaxPlotOfCoverage = (installMents: Parcela[]): GetMaxPlotOfCoverage => {
    const maxPlot = installMents.reduce((previousValue, currentValues) => previousValue.quantidade > currentValues.quantidade ? previousValue : currentValues)
    return { ...maxPlot }
};
