import type { ITransformBrandVehicleData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions/transformVehicleData/ITransformBrandVehicleData"
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types"
import type { AgroupedConsultaFipe, Data } from "@modules/suhai/consultarFipe/dtos"

export class TransformVehicleData implements ITransformBrandVehicleData {
    public transformBrandData(data: AgroupedConsultaFipe): Options[] {
        const result: Options[] = []
        Object.keys(data).forEach(key => {
            const itemsFromGroup: Data[] = data[key]
            result.push({
                label: key,
                keyNameToSetValueState: 'modelo',
                value: JSON.stringify(itemsFromGroup)
            })
        })
        return result

    }
}