import type { State } from "@pages/quote/layouts/hooks/useGetParamsScreen/types";
import { keysToLocalStorageData } from "@pages/quote/layouts/utils/storageLocalQuoteData/constants";
import { localStorage } from "@utils/persisteRetrieveLocalData/localStorage/persiteData";
import type { TRetrieve } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/instance/types";
export const storageLocalQuoteData = async (data: State | null): Promise<void> => {
    if (data) {
        const key = keysToLocalStorageData.quote
        try {
            await localStorage.storage({ data, key: keysToLocalStorageData.quote })
        } catch (error) {
            console.log(`Erro when storage data of key ${key}`, error)
        }
    }
}
export const retrieveLocalQuoteData = async (): TRetrieve => {
    const key = keysToLocalStorageData.quote
    try {
        return await localStorage.retrieve({ key })
    } catch (error) {
        console.log(`Error when retrieve data from key ${key}`, error)
    }
}