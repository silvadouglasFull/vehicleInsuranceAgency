import { CovaragePlans } from "@components/accordion/suhai/coveragePlans";
import { InfoFipe } from "@components/accordion/suhai/infoFipe";
import { InstallMents } from "@components/accordion/suhai/installments";
import { BasicInfo } from "@components/accordion/suhai/proposal/basicInfo";
import { RFC } from "@components/accordion/suhai/rcf";
import React from "react";
import { Accordion } from "react-bootstrap";
import { useDataAccordion } from "./hooks/useDataAccordion";
import { useGetParamsSecreen } from "./hooks/useGetParamsScreen";
export const DefaultLayout: React.FC = () => {
    const { data } = useGetParamsSecreen()
    const { awardCoverage, infoFipe, installments, rcf, summary } = useDataAccordion(data ?? null)

    return (
        <>
            <Accordion defaultActiveKey="0" alwaysOpen>
                {summary && (<BasicInfo {...summary} />)}
                {installments?.length && (<InstallMents installments={installments} />)}
                {infoFipe && (<InfoFipe {...infoFipe} />)}
                {rcf && (<RFC RFC={rcf} />)}
                {awardCoverage?.Cobertura?.length && (<CovaragePlans PremioCoberturas={awardCoverage} />)}
            </Accordion>
        </>
    )
}