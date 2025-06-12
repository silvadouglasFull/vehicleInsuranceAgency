import type { CoberturaItem } from "@components/quote/suhai/coveragePlans/types";
import type { PlotProps } from "@components/quote/suhai/installments/plot/types";
export type Summary = {
    premioLiquido: string;
    premioTotalAVista: string;
    protocolo: string;
    textoMsgRet: string;
}
export type InfoFipe = {
    fatorFipe: string;
    valorFipe: string;
    valorFipexFator: string;
}
export type RCF = {
    premioDanosCorporais: number;
    premioDanosMateriais: number;
    premioDanosMorais: number;
}
export type Installments = PlotProps[]
export type AwardCoverage = {
    Cobertura: CoberturaItem[];
}
export type UseDataAccordion = {
    summary: Summary | null;
    infoFipe: InfoFipe | null;
    rcf: RCF | null;
    installments: Installments | null;
    awardCoverage: AwardCoverage | null;
}