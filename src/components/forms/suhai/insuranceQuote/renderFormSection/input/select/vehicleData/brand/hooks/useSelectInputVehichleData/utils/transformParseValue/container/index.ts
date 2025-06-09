import { TransformParseValue } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/vehicleData/brand/hooks/useSelectInputVehichleData/utils/transformParseValue/intance"
import type { ITransformParseValue } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/vehicleData/brand/hooks/useSelectInputVehichleData/utils/transformParseValue/intance/ITransformParseValue"
export const container = (): ITransformParseValue => {
    const transformParseValue: ITransformParseValue = new TransformParseValue()
    return transformParseValue
}