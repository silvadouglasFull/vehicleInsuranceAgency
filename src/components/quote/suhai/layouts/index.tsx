import { CovaragePlans } from "@components/quote/suhai/coveragePlans";
import { InfoFipe } from "@components/quote/suhai/infoFipe";
import { InstallMents } from "@components/quote/suhai/installments";
import { BasicInfo } from "@components/quote/suhai/proposal/basicInfo";
import { RFC } from "@components/quote/suhai/rcf";
import React from "react";
import { Card, Container } from "react-bootstrap";
import { useDataAccordion } from "./hooks/useDataAccordion";
import { useGetParamsSecreen } from "./hooks/useGetParamsScreen";
export const DefaultLayout: React.FC = () => {
    const { data } = useGetParamsSecreen()
    const { awardCoverage, infoFipe, installments, rcf, summary } = useDataAccordion(data ?? null)
    return (
        <>
            {summary && (<BasicInfo {...summary} />)}
            {awardCoverage?.Cobertura?.length && (<CovaragePlans PremioCoberturas={awardCoverage} />)}
            <Container>
                <Card.Text className="text-success">
                    Outras informações
                </Card.Text>
            </Container>
            {installments?.length && (<InstallMents installments={installments} />)}
            {infoFipe && (<InfoFipe {...infoFipe} />)}
            {rcf && (<RFC RFC={rcf} />)}
        </>
    )
}