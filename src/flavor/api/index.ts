import type { ApiVersion, EndPoints, UrlString } from "@flavor/api/types"
export const versionApi: ApiVersion = 'v0'
export const host: UrlString = `https://api.suhai.com.br/suhai/api/${versionApi}` as UrlString
export const endPoints: EndPoints = {
    consultafipe: '/consultafipe',
    incluircotacao: '/incluircotacao',
    transmitirproposta: '/transmitirproposta'
}