import type { ITransformBrandVehicleData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions/transformVehicleData/ITransformBrandVehicleData"
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types"
import type { AgroupedConsultaFipe, Data } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe"

export class TransformVehicleData implements ITransformBrandVehicleData {
    transformBrandDataWhenOneResult(data: AgroupedConsultaFipe): Options[] {
        const result: Data[] = []
        Object.keys(data).forEach(key => {
            const itemsFromGroup: Data[] = data[key]
            result.push(...itemsFromGroup)
        })
        return result.map(item => ({
            value: item?.marca ?? '',
            label: item?.marca ?? '',
        })) as Options[]
    }
    public transformBrandData(data: AgroupedConsultaFipe): Options[] {
        return this.transformBrandDataWhenOneResult(data)
    }
}