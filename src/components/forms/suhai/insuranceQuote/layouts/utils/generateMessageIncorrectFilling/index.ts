import type { GenerateListMessageIncorrectFilling, GenerateListMessageIncorrectFillingProps, GenerateMessageIncorrectFillingProps } from "@components/forms/suhai/insuranceQuote/layouts/utils/generateMessageIncorrectFilling/types"
import { isValid } from "@components/forms/suhai/insuranceQuote/layouts/utils/isValidRequiredFields"

export const generateMessageIncorrectFilling = ({ label }: GenerateMessageIncorrectFillingProps) => {
    return `Você precisa resposta a pergunta: ${label}`
}
export const generateListMessageIncorrectFilling = ({ requiredFields, formData }: GenerateListMessageIncorrectFillingProps): GenerateListMessageIncorrectFilling => {
    const listToast: string[] = []
    requiredFields.forEach(item => {
        const valid = isValid({ name: item.name, state: formData })
        if (!valid) {
            listToast.push(generateMessageIncorrectFilling({ label: item.label }))
        }
    })
    return listToast
}