import type { HandleFormField, States } from "@components/forms/suhai/insuranceQuote/context/types"
import { generateFakeIncluirCotacaoRequest } from "../generateFakeIncluirCotacaoRequest"
export type SetFormFieldsProps = {
    handleForm: (fields: HandleFormField) => void
}
export const setFormFields = ({ handleForm }: SetFormFieldsProps) => {
    const states: States = generateFakeIncluirCotacaoRequest()
    handleForm({ ...states })
}