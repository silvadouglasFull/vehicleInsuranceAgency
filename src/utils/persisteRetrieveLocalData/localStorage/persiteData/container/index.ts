import { container as retrieveConvetersContainer } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/retrieve/container";
import { container as storageConvetersContainer } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/storage/container";
import { LocalStorage } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/instance";
import type { IInstance } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/instance/IInstance";
import { container as typesDataContainer } from "@utils/persisteRetrieveLocalData/typeData/container";
export const container = (): IInstance => {
    const localStorage: Storage = window.localStorage
    const storageConverters = storageConvetersContainer()
    const typesData = typesDataContainer()
    const retrieveConverters = retrieveConvetersContainer()
    const instance = new LocalStorage(localStorage, storageConverters, retrieveConverters, typesData)
    return instance
}