import type { EndPoints, UrlString } from "@flavor/cep/types"
export const host: UrlString = 'http://localhost:3333/api' as UrlString
export const endPoints: EndPoints = {
    consultCEP: (cep: string) => `/cep/${cep}`
} 