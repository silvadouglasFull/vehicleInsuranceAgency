import { WhatIsDataType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType/instance"
import { IsTypeVehicleData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType/IsTypeVehicleData"
import { UnknownHandler } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType/unknownHandler"
import type { Container } from "./types"

export const container = (): Container => {
    const whatIsDataType = new WhatIsDataType(
        new IsTypeVehicleData(
            new UnknownHandler(null)
        )
    )
    return {
        whatIsDataType,
    }
}