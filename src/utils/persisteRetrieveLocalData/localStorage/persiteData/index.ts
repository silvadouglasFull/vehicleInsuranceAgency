import { container } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/container";
import type { Retrieve, StorageParams, TStorage } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/instance/types";
import type { LocalStorage } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/types";

export const localStorage: LocalStorage = {
    storage: async ({ data, key }: StorageParams): TStorage => container().storage({ data, key }),
    retrieve: async ({ key }: Retrieve) => container().retrieve({ key })
}