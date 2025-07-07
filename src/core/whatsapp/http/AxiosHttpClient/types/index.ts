export type KeyOfConfig = 'quotationCompletion' | 'cartAbandonment'
export type RequestWhatsapp = { destino: string, nome?: string, keyConfig?: KeyOfConfig }