import type { Data } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/storage/instance/types";

export interface IInstance {
    convertData(data: Data): Promise<string>
}