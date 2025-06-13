import type { Data, TypesOf } from "@utils/persisteRetrieveLocalData/typeData/instance/types";

export interface IInstance {
    getTypeOfData(data: Data): Promise<TypesOf>
}