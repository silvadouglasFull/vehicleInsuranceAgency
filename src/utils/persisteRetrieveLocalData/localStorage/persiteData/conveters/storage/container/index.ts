import { Conveters } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/storage/instance";
import type { IInstance } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/storage/instance/IInstance";

export const container = (): IInstance => {
    const instance = new Conveters()
    return instance
}