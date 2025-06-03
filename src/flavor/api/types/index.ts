export type ApiVersion = 'v0' | 'v1'
export type UrlString = string & { __brand: 'url' }
export type EndPoints = {
    consultafipe: '/consultafipe'
    incluircotacao: '/incluircotacao'
    transmitirproposta: '/transmitirproposta'
}