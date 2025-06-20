import type { ApiVersion, EndPoints, UrlString } from "@flavor/api/types"
export const versionApi: ApiVersion = 'v0'
export const host: UrlString = `https://onzeponto11.com.br:3333/api/suhai` as UrlString
export const endPoints: EndPoints = {
    consultafipe: '/consultafipe',
    incluircotacao: '/incluircotacao',
    transmitirproposta: '/transmitirproposta',
    formOptions: '/formOptions'
}