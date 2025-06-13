import type { ConvertData, Data } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/retrieve/instance/types";

export interface IInstance {
    convertData({ data, type }: ConvertData): Promise<Data>
}