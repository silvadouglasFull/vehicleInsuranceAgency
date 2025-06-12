import type { EndPoints, UrlString } from "@flavor/cep/types"
export const host: UrlString = 'https://viacep.com.br/ws/' as UrlString
export const endPoints: EndPoints = {
    consultCEP: (cep: string) => `${cep}/json`
} 