import type { Retrieve, StorageParams, TRetrieve, TStorage } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/instance/types";
export type LocalStorage = {
    storage: ({ data, key }: StorageParams) => TStorage;
    retrieve: ({ key }: Retrieve) => TRetrieve
} 