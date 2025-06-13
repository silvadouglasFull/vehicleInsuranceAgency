import type { Data as RetrieveData } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/retrieve/instance/types";
import type { Data } from "@utils/persisteRetrieveLocalData/typeData/instance/types";

export type StorageParams = {
    data: Data,
    key: string
}
export type GenerateKey = {
    data: Data, key: string
}
export type Retrieve = {
    key: string
}
export type TStorage = Promise<void>
export type TRetrieve = Promise<RetrieveData>