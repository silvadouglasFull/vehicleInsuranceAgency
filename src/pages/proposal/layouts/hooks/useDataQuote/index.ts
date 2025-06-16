import type { AwardCoverage, InfoFipe, Installments, RCF, Summary, UseDataQuote } from "@pages/quote/layouts/hooks/useDataQuote/types";
import type { State } from "@pages/quote/layouts/hooks/useGetParamsScreen/types";
import { useEffect, useState } from "react";
export const useDataQuote = (data: State | null): UseDataQuote => {
    const [summary, setSummary] = useState<Summary | null>(null)
    const [infoFipe, setInfoFipe] = useState<InfoFipe | null>(null)
    const [rcf, setRfc] = useState<RCF | null>(null)
    const [installments, setInstallments] = useState<Installments | null>(null)
    const [awardCoverage, setAwardCoverage] = useState<AwardCoverage | null>(null)
    useEffect(() => {
        try {
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
        } catch (error) {
            console.log(error)
        }
    }, [data])
    return {
        summary,
        infoFipe,
        rcf,
        installments,
        awardCoverage
    }
}