import type { CoberturaItem, Parcela } from "@components/quote/suhai/coveragePlans/types"
export type ExplanationProposedReturnFieldsKey = keyof Parcela | keyof CoberturaItem
export type ExplanationProposedReturnFields = {
    id: number
    key: ExplanationProposedReturnFieldsKey
    title: string
}