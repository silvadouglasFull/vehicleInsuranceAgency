import type { GenerateMessageIncorrectFillingProps } from "@components/forms/suhai/insuranceQuote/layouts/utils/generateMessageIncorrectFilling/types"

export const generateMessageIncorrectFilling = ({ label }: GenerateMessageIncorrectFillingProps) => {
    return `Você precisa resposta a pergunta: ${label}`
}