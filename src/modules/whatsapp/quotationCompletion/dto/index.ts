export type ResponseWhatsapp = {
    status: number
    message?: string
}
export type RequestWhatsapp = {
    destino: string,
    nome?: string
}
export type KeyOfConfig = 'quotationCompletion' | 'cartAbandonment'