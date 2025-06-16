import type { ExplanationProposedReturnFields } from "@flavor/texts/coverage/types";

export const explanationProposedReturnFields: ExplanationProposedReturnFields[] = [{
    id: 0,
    key: 'valorIOF',
    title: `O valor da IOF dividido por parcela, por exemplo, se a quantidade de parcelas for igual a 12, o valor total da IOF será o valor da IOF retornada multiplicado por 12 (qtde de parcelas)`
}, {
    id: 1,
    key: 'premioLiquido',
    title: `Retorno do valor liquido do seguro`
}, {
    id: 2,
    key: 'valorJuros',
    title: `O valor de juros (sobre o premio Liquido) para cada parcela, dependendo da quantidade de parcelas, por exemplo, se forem 4 parcelas, e o valor de juros for R$35,00, será este valor de juros para cada uma das 4 parcelas`
}]