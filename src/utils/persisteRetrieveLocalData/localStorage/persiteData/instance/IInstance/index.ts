import type { Retrieve, StorageParams, TStorage } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/instance/types";
import type { Data } from "@utils/persisteRetrieveLocalData/typeData/instance/types";

export interface IInstance {
    storage({ data, key }: StorageParams): TStorage
    retrieve({ key }: Retrieve): Promise<Data>
}