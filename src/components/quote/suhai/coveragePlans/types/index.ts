export type Parcela = {
    _value_1: number
    quantidade: number
    valorTotal: number
    valorJuros: number
    valorIOF: number
    percentualJuros: number
}
export type Parcelamento = {
    Parcela: Parcela[]
}
export type SendProposal = () => Promise<void>
export type CoberturaItem = {
    Parcelamento: Parcelamento
    id: number
    nome: string
    premioLiquido: number
    sendProposal?: SendProposal
}
export type Calculo = {
    PremioCoberturas: {
        Cobertura: CoberturaItem[]
    }
    sendProposal?: SendProposal
}