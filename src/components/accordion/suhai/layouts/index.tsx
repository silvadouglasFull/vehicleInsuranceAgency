import { CovaragePlans } from "@components/accordion/suhai/coveragePlans";
import { InfoFipe } from "@components/accordion/suhai/infoFipe";
import { InstallMents } from "@components/accordion/suhai/installments";
import type { PlotProps } from "@components/accordion/suhai/installments/plot/types";
import data from "@components/accordion/suhai/layouts/utils/faker/index.json";
import { BasicInfo } from "@components/accordion/suhai/proposal/basicInfo";
import { RFC } from "@components/accordion/suhai/rcf";
import React from "react";
import { Accordion } from "react-bootstrap";

export const DefaultLayout: React.FC = () => {
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

    const summary = {
        premioLiquido,
        premioTotalAVista,
        protocolo,
        textoMsgRet
    }
    const infoFipe = {
        fatorFipe,
        valorFipe,
        valorFipexFator
    }
    const rcf = {
        premioDanosCorporais, premioDanosMateriais, premioDanosMorais
    }
    const installments: PlotProps[] = parcelas.map((item, i) => ({
        numberPlot: i + 1,
        plot: Number(item)
    }))
    return (
        <>
            <Accordion defaultActiveKey="0" alwaysOpen>
                <BasicInfo {...summary} />
                <InstallMents installments={installments} />
                <InfoFipe {...infoFipe} />
                <RFC RFC={rcf} />
                <CovaragePlans PremioCoberturas={PremioCoberturas} />
            </Accordion>
        </>
    )
}