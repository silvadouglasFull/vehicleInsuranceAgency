export type UrlString = string & { __brand: 'url' }
export type EndPoints = {
    consultCEP: (cep: string) => string
}

