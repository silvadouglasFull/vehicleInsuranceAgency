import { CovaragePlans } from "@components/quote/suhai/coveragePlans";
import { InfoFipe } from "@components/quote/suhai/infoFipe";
import { InstallMents } from "@components/quote/suhai/installments";
import { BasicInfo } from "@components/quote/suhai/proposal/basicInfo";
import { RFC } from "@components/quote/suhai/rcf";
import { useDataQuote } from "@pages/quote/layouts/hooks/useDataQuote";
import { useGetParamsSecreen } from "@pages/quote/layouts/hooks/useGetParamsScreen";
import React from "react";
import { Card, Container } from "react-bootstrap";
export const DefaultLayout: React.FC = () => {
    const { data } = useGetParamsSecreen()
    const { awardCoverage, infoFipe, installments, rcf, summary } = useDataQuote(data ?? null)
    return (
        <>
            {summary && (<BasicInfo {...summary} />)}
            {infoFipe && (<InfoFipe {...infoFipe} />)}
            {awardCoverage?.Cobertura?.length && (<CovaragePlans PremioCoberturas={awardCoverage} />)}
            <Container>
                <Card.Text className="text-success">
                    Outras informações
                </Card.Text>
            </Container>
            {installments?.length && (<InstallMents installments={installments} />)}
            {rcf && (<RFC RFC={rcf} />)}
        </>
    )
}