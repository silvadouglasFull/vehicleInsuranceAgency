import type { IInstance } from "@utils/persisteRetrieveLocalData/typeData/instance/IInstance";
import type { Data, TypesOf } from "@utils/persisteRetrieveLocalData/typeData/instance/types";

export class TypesData implements IInstance {

    public async getTypeOfData(data: Data): Promise<TypesOf> {
        const type = typeof data
        return type
    }
}