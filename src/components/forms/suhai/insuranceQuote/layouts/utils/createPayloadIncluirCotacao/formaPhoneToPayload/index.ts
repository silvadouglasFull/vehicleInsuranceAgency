import type { FormatPhoneToPayloadParams } from "@components/forms/suhai/insuranceQuote/layouts/utils/createPayloadIncluirCotacao/formaPhoneToPayload/types"
import { sanitizeString } from "@utils/sanitizeString"

export const formatPhoneToPayload = ({ ddd_cel, num_cel }: FormatPhoneToPayloadParams): string => {
    const cel = sanitizeString(num_cel)
    return cel?.replace(ddd_cel, '')
}