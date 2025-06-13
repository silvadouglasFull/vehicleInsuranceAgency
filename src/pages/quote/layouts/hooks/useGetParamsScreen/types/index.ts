import type { CoberturaItem } from "@components/quote/suhai/coveragePlans/types";
import type { RFC } from "@components/quote/suhai/rcf/types";

export type State = {
    protocolo: string;
    codMsgRet: string;
    textoMsgRet: string;
    premioLiquido: string;
    premioTotalAVista: string;
    parcelas: {
        numeroParcela: number;
        valor: string;
    }[];
    valorFipe: string;
    fatorFipe: string;
    valorFipexFator: string;
    corretor: string;
    rastreador: null;
    cdCobertura: string;
    Calculo: {
        Automovel: {
            valorFipe: number;
            fatorFipe: number;
            valorIS: number;
            rastreador: null;
        };
        RCF: RFC;
        Franquia: null;
        PremioCoberturas: {
            Cobertura: CoberturaItem[]
        };
        id: number;
        numero: string;
    };
}
export type UseGetParamsSecreen = {
    data: State | null;
}