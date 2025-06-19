import { TransformParseValue } from "@components/forms/suhai/insuranceQuote/vehicleData/select/brand/hooks/useSelectInputVehichleData/utils/transformParseValue/intance"
import type { ITransformParseValue } from "@components/forms/suhai/insuranceQuote/vehicleData/select/brand/hooks/useSelectInputVehichleData/utils/transformParseValue/intance/ITransformParseValue"
export const container = (): ITransformParseValue => {
    const transformParseValue: ITransformParseValue = new TransformParseValue()
    return transformParseValue
}