import type { KeyOfConfig } from "@modules/whatsapp/quotationCompletion/dto"

export type UrlString = string & { __brand: 'url' }
export type EndPoints = {
    send: '/send'
}

export const keyOfConfig: KeyOfConfig = 'cartAbandonment'