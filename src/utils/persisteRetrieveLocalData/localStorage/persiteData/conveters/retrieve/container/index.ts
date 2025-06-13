import { Conveters } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/retrieve/instance";
import type { IInstance } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/retrieve/instance/IInstance";

export const container = (): IInstance => {
    const instance = new Conveters()
    return instance
}