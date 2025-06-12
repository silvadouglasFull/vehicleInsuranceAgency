import type { AwardCoverage, InfoFipe, Installments, RCF, Summary, UseDataAccordion } from "@components/quote/suhai/layouts/hooks/useDataAccordion/types";
import type { State } from "@components/quote/suhai/layouts/hooks/useGetParamsScreen/types";
import { useEffect, useState } from "react";
export const useDataAccordion = (data: State | null): UseDataAccordion => {
    const [summary, setSummary] = useState<Summary | null>(null)
    const [infoFipe, setInfoFipe] = useState<InfoFipe | null>(null)
    const [rcf, setRfc] = useState<RCF | null>(null)
    const [installments, setInstallments] = useState<Installments | null>(null)
    const [awardCoverage, setAwardCoverage] = useState<AwardCoverage | null>(null)
    useEffect(() => {
        if (!data) {
            return
        }
        const {
            premioLiquido,
            premioTotalAVista,
            protocolo,
            textoMsgRet,
            fatorFipe,
            valorFipe,
            valorFipexFator,
            parcelas,
            Calculo: {
                RCF: {
                    premioDanosCorporais,
                    premioDanosMateriais,
                    premioDanosMorais
                },
                PremioCoberturas
            },
        } = data
        setAwardCoverage(PremioCoberturas)
        setSummary({
            premioLiquido,
            premioTotalAVista,
            protocolo,
            textoMsgRet
        })
        setInfoFipe({
            fatorFipe,
            valorFipe,
            valorFipexFator
        })
        setRfc({
            premioDanosCorporais,
            premioDanosMateriais,
            premioDanosMorais
        })
        setInstallments(parcelas.map((item) => ({
            numberPlot: item.numeroParcela,
            plot: Number(item.valor)
        })))

    }, [data])
    return {
        summary,
        infoFipe,
        rcf,
        installments,
        awardCoverage
    }
}