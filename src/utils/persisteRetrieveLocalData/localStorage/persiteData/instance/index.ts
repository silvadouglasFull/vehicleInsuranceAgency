import type { IInstance as IRetrivieConverter } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/retrieve/instance/IInstance";
import type { IInstance as IStorageConverter } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/storage/instance/IInstance";
import type { IInstance } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/instance/IInstance";
import type { GenerateKey, Retrieve, StorageParams, TRetrieve, TStorage } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/instance/types";
import type { IInstance as ITypesData } from "@utils/persisteRetrieveLocalData/typeData/instance/IInstance";
import type { TypesOf } from "@utils/persisteRetrieveLocalData/typeData/instance/types";

export class LocalStorage implements IInstance {
    private readonly driver: Storage
    private readonly storageConvertData: IStorageConverter
    private readonly retrivieConverter: IRetrivieConverter
    private readonly typesData: ITypesData
    constructor(
        driver: Storage,
        storageConvertData: IStorageConverter,
        retrivieConverter: IRetrivieConverter,
        typesData: ITypesData
    ) {
        this.driver = driver
        this.storageConvertData = storageConvertData
        this.typesData = typesData
        this.retrivieConverter = retrivieConverter
    }
    private async generateKey({ data, key }: GenerateKey): Promise<string> {
        const typeOfData: TypesOf = await this.typesData.getTypeOfData(data)
        return `${key}-${typeOfData}`
    }
    public async storage({ data, key }: StorageParams): TStorage {
        const transformedData = await this.storageConvertData.convertData(data)
        const transformedKey = await this.generateKey({ data, key })
        return this.driver.setItem(transformedKey, transformedData)
    }
    private async retrieveNoData(): Promise<string> {
        return ''
    }
    public async retrieve({ key }: Retrieve): TRetrieve {
        const [, splitType] = key.split('-')
        const item = this.driver.getItem(key)
        if (!item || !splitType) {
            return this.retrieveNoData()
        }
        const data = await this.retrivieConverter.convertData({ data: item, type: splitType as TypesOf })
        return data ?? this.retrieveNoData()
    }
}