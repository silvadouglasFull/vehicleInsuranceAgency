import { container } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/storage/container";
import type { Data } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/storage/instance/types";

export const converters = {
    convertData: (data: Data): Promise<string> => container().convertData(data)
}