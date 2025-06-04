import type { Container, ContainerProps } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions/container/types";
import { TransformOptions } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions/instance";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";

export const container = ({ data }: ContainerProps): Container => {
    const transformOptions: Options[] = new TransformOptions().init(data)
    return {
        transformOptions
    }
}