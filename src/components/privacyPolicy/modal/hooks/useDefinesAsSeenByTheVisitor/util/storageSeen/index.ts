import { key } from "@components/privacyPolicy/modal/hooks/useDefinesAsSeenByTheVisitor/util/storageSeen/constants"
import { localStorage } from "@utils/persisteRetrieveLocalData/localStorage/persiteData"
import type { RetrieveAsSeenByTheVisitor } from "./types"

export const defineAsSeenByTheVisitor = async () => {
    try {
        await localStorage.storage({ data: { seen: true }, key: key })
    } catch (error) {
        console.log(error)
    }
}
export const retrieveAsSeenByTheVisitor = async (): Promise<RetrieveAsSeenByTheVisitor> => {
    try {
        const respone = await localStorage.retrieve({ key: `${key}-object` })
        return respone as RetrieveAsSeenByTheVisitor
    } catch (error) {
        console.log(error)
    }
}