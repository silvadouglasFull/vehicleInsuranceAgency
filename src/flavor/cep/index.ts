import type { EndPoints, UrlString } from "@flavor/cep/types"
export const host: UrlString = 'https://onzeponto11.com.br:3333/api' as UrlString
export const endPoints: EndPoints = {
    consultCEP: (cep: string) => `/cep/${cep}`
} 