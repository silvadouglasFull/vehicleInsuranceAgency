import type { IInstance } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/retrieve/instance/IInstance";
import type { ConvertData, Data, DataConverters, DataConvertersFunction, GetDataConverts, TypesOf } from "@utils/persisteRetrieveLocalData/localStorage/persiteData/conveters/retrieve/instance/types";

export class Conveters implements IInstance {
    private dataConverters: DataConverters = {
        object: ({ data }: DataConvertersFunction) => this.convertToJSON({ data }),
        string: ({ data }) => this.convertToString({ data })
    }
    public async convertData({ data, type }: ConvertData): Promise<Data> {
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
    private async convertToString({ data }: DataConvertersFunction): Promise<string> {
        return String(data)
    }
    private async convertToJSON({ data }: DataConvertersFunction): Promise<object> {
        return JSON.parse(data)
    }
}