import type { EndPoints, UrlString } from "@flavor/whatsapp/types"
import type { KeyOfConfig } from "@modules/whatsapp/quotationCompletion/dto"
export const host: UrlString = 'http://localhost:3333/api/whatsapp' as UrlString
export const endPoints: EndPoints = {
    send: '/send'
}
export const keyOfConfig: KeyOfConfig = 'cartAbandonment'