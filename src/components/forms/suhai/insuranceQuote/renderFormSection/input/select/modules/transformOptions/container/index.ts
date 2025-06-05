import type { Container, ContainerProps } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions/container/types";
import { TransformOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions/instance";
import { TransformVehicleData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions/transformVehicleData";
import type { ITransformBrandVehicleData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions/transformVehicleData/ITransformBrandVehicleData";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";

export const container = ({ data }: ContainerProps): Container => {
    const transformVehicleData: ITransformBrandVehicleData = new TransformVehicleData()
    const transformOptions: Options[] = new TransformOptions(transformVehicleData).init(data)
    return {
        transformOptions
    }
}