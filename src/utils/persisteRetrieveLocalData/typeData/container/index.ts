import { TypesData } from "@utils/persisteRetrieveLocalData/typeData/instance";
import type { IInstance } from "@utils/persisteRetrieveLocalData/typeData/instance/IInstance";

export const container = (): IInstance => {
    const instance = new TypesData()
    return instance
}