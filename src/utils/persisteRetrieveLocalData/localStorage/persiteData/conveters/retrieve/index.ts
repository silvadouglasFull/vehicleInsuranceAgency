import { container } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/retrieve/container";
import type { ConvertData, Data } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/retrieve/instance/types";

export const converters = {
    retrieve: ({ data, type }: ConvertData): Promise<Data> => container().convertData({ data, type })
}