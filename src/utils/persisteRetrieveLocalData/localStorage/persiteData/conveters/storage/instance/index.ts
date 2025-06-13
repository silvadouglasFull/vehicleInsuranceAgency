import type { IInstance } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/storage/instance/IInstance";
import type { ConvertData, Data, DataConverters, GetDataConverts, TypesOf } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/storage/instance/types";

export class Conveters implements IInstance {
    private dataConverters: DataConverters = {
        object: ({ data }: ConvertData) => this.convertToJsonStringify({ data })
    }
    public async convertData(data: Data): Promise<string> {
        const type = await this.getTypeOfData(data)
        const dataConverter = await this.getDataConverts(type)
        if (dataConverter) {
            return await dataConverter({ data })
        }
        throw new Error(`Não encontramos o conversor para o tipo ${type}`);
    }
    private async getDataConverts(typeData: TypesOf): GetDataConverts {
        if (typeData in this.dataConverters) {
            return this.dataConverters[typeData as keyof DataConverters];
        }
        return undefined;
    }
    private async getTypeOfData(data: Data): Promise<TypesOf> {
        const type = typeof data
        return type
    }
    private async convertToJsonStringify({ data }: ConvertData): Promise<string> {
        return JSON.stringify(data)
    }
}