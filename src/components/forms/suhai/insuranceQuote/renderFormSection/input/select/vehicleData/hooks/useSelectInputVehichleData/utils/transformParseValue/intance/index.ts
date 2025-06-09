import type { ITransformParseValue } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/vehicleData/hooks/useSelectInputVehichleData/utils/transformParseValue/intance/ITransformParseValue";
import type { Data } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe";
export class TransformParseValue implements ITransformParseValue {
    init(value: string): Data[] {
        try {
            const transformedValue = JSON.parse(value)
            return transformedValue as Data[]
        } catch (error) {
            console.log(error)
            return []
        }
    }
}
